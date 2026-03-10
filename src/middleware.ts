import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const PUBLIC_ROUTES = [
  "/",
  "/about-us",
  "/contact-us",
  "/insights",
  "/login",
  "/verify",
  "/forgot-password",
  "/reset-password",
  "/sign-up",
  "/not-found",
];

const PUBLIC_ROUTE_PREFIXES = ["/insights/info/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic =
    PUBLIC_ROUTES.includes(pathname) ||
    PUBLIC_ROUTE_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isPublic) return NextResponse.next();

  const token = request.cookies.get("oasisAfrikUserId")?.value;

  // No token at all → redirect
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Token exists → validate it
  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("oasisAfrikUserId");
      return response;
    }
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("oasisAfrikUserId");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
