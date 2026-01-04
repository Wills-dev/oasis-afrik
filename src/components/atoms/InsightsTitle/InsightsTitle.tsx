"use client";

import { motion } from "framer-motion";

const InsightsTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className=""
    >
      <h2 className="md:text-[80px] sm:text-[65px] text-5xl font-bold flex items-center justify-center flex-wrap p-0 m-0 leading-tight ">
        {["Market", "Insights", "for", "African"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="inline-block mr-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}

        {["Export", "&", "Trade"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="inline-block text-[#009933] mr-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
};

export default InsightsTitle;
