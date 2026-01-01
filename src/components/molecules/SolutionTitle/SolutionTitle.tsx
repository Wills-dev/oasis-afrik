"use client";

import { motion } from "framer-motion";

const SolutionTitle = () => {
  return (
    <motion.h6
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="sm:text-6xl text-4xl text-center font-medium"
    >
      <span className="text-[#009933]">Solutions</span> for Producers, Buyers &
      Investors
    </motion.h6>
  );
};

export default SolutionTitle;
