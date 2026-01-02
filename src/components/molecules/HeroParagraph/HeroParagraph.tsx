"use client";

import { motion } from "framer-motion";

const HeroParagraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        type: "spring",
        stiffness: 100,
      }}
    >
      <p className="sm:text-xl text-center text-slate-600 mb-8">
        {paragraph?.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: 1.0 + i * 0.05,
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default HeroParagraph;
