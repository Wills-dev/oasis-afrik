"use client";

import { motion } from "framer-motion";
import { useActivePath } from "@/lib/hooks/useActivePath";

interface NavLinkProps {
  label: string;
  link: string;
  color?: string;
  index?: number;
}

const NavLink = ({
  color = "#000000",
  label,
  link,
  index = 0,
}: NavLinkProps) => {
  const isActive = useActivePath(link);
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 * index, ease: "easeOut" }}
    >
      <a
        href={link}
        className={`block capitalize font-medium text-sm group-hover:scale-105 transition-all duration-300 ${
          isActive ? "text-green-700" : `text-${color}`
        }`}
      >
        {label}
      </a>
      <span
        className={`absolute block left-0 bottom-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full`}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default NavLink;
