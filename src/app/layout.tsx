import type { Metadata } from "next";

import "../styles/globals.css";

import QueryProvider from "@/components/QueryProvider";
import { Providers } from "@/store/provider";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  title: "OasisAfrik",
  applicationName: "OasisAfrik",
  description:
    "A secure digital marketplace that links producers with global buyers and investors through verified trade, escrow payments, and trusted logistics.",
  keywords: [
    "OasisAfrik",
    "Africa",
    "Products",
    "Marketplace",
    "E-commerce",
    "Buyers",
    "Sellers",
    "Soya",
    "Cashew",
    "Buy",
    "Sell",
    "Trusted",
    "Cocoa",
    "RFQ",
  ],
  openGraph: {
    title: "OasisAfrik: Find trusted sellers for alll your agro products",
    description:
      "Join OasisAfrik to find or post buy, seller, request for quote the best quality products",
    url: baseUrl,
    siteName: "OasisAfrik",
    images: [
      {
        url: "https://emilist.netlify.app/images/home.png",
        width: 1200,
        height: 630,
        alt: "OasisAfrik Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OasisAfrik: Find trusted sellers for alll your agro products",
    description:
      "Join OasisAfrik to find or post buy, seller, request for quote the best quality products",
    images: ["https://emilist.netlify.app/images/home.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Providers>{children}</Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
