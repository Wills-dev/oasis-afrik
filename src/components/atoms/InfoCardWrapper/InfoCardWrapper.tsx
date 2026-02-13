"use client";

import { motion } from "framer-motion";

const InfoCardWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
    >
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default InfoCardWrapper;
