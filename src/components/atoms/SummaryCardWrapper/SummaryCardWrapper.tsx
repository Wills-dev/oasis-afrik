"use client";

import { motion } from "framer-motion";

import SummaryCardLoader from "../skeletonLoader/SummaryCardLoader";

const SummaryCardWrapper = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex gap-2 flex-wrap"
    >
      {loading ? <SummaryCardLoader /> : children}
    </motion.div>
  );
};

export default SummaryCardWrapper;
