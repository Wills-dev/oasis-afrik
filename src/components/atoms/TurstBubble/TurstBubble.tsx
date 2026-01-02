"use client";

import Image from "next/image";

import { motion, type Variants } from "framer-motion";

interface TurstBubbleProps {
  imgUrl: string;
  title: string;
  className: string;
  delay?: number;
  duration?: number;
  animate?: boolean;
  initialX?: number;
  initialY?: number;
  animateX?: number;
  animateY?: number;
}

const TurstBubble = ({
  imgUrl,
  title,
  className = "",
  delay = 0,
  duration = 0.8,
  animate = true,
  initialX = 0,
  initialY = 50,
  animateX = 0,
  animateY = 0,
}: TurstBubbleProps) => {
  const bubbleVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: initialX,
      y: initialY,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: animateX,
      y: animateY,
      transition: {
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <motion.div
      variants={bubbleVariants}
      initial="hidden"
      whileInView={animate ? "visible" : "hidden"}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`absolute rounded-full shadow-xl bg-[#F5F5F5] sm:p-4 p-2 flex items-center justify-center gap-2 border border-white ${className}`}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={40}
        height={40}
        className="object-contain max-sm:h-5 max-sm:w-5"
      />
      <p className="text-center font-medium sm:text-lg text-sm">{title}</p>
    </motion.div>
  );
};

export default TurstBubble;
