"use client";

import { motion } from "framer-motion";

const SectionTitleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h6
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      className="sm:text-6xl text-4xl text-center font-medium"
    >
      {children}
    </motion.h6>
  );
};

export default SectionTitleWrapper;
