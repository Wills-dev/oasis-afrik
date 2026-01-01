"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroTitle = () => {
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
      <h2 className="md:text-[80px] text-[65px] font-bold flex items-center justify-center flex-wrap p-0 m-0">
        {["Connecting"].map((word, i) => (
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

        <motion.span
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="p-2 mt-8 rounded-md bg-[#009933] h-fit mx-2 inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/assets/images/game-icons_africa.svg"
            alt="africa map"
            width={24}
            height={24}
            className="w-8 h-8 object-contain"
          />
        </motion.span>

        {["Africa"].map((word, i) => (
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

        {["to", "Global", "Trade"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7 + i * 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="inline-block mr-4 last:mr-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
};

export default HeroTitle;
