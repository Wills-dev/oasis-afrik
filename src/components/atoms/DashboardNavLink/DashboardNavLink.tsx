"use client";

import Link from "next/link";

import { useActivePath } from "@/lib/hooks/useActivePath";

interface DashboardNavLinkProps {
  link: string;
  title: string;
  icon?: React.ReactElement;
}

const DashboardNavLink = ({ link, title, icon }: DashboardNavLinkProps) => {
  const isActive = useActivePath(link) || "";
  return (
    <Link
      href={link}
      className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100  transition-all duration-300 text-sm font-medium ${
        isActive ? "text-[#009933]" : "text-gray-800"
      }`}
    >
      {icon} <p>{title}</p>
    </Link>
  );
};

export default DashboardNavLink;
