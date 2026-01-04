"use client";

import { motion } from "framer-motion";

const SectionTitleWrapper = ({
  children,
  className = "text-center",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h6
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      className={`sm:text-6xl text-4xl font-medium ${className}`}
    >
      {children}
    </motion.h6>
  );
};

export default SectionTitleWrapper;
