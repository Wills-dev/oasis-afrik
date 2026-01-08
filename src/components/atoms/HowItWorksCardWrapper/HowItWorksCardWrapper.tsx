"use client";

import { motion, Variants } from "framer-motion";

import Image from "next/image";

const HowItWorksCardWrapper = ({
  showJustImg,
  children,
  title,
  description,
  delay = 0,
  duration = 0.8,
  animate = true,
  initialX = 0,
  initialY = 50,
  animateX = 0,
  animateY = 0,
}: {
  showJustImg?: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  delay?: number;
  duration?: number;
  animate?: boolean;
  initialX?: number;
  initialY?: number;
  animateX?: number;
  animateY?: number;
}) => {
  const cardVariants: Variants = {
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
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView={animate ? "visible" : "hidden"}
      viewport={{ once: true }}
      whileTap={{ scale: 0.95 }}
      className="max-w-[427px] w-full sm:h-[407px] rounded-[20px] bg-white overflow-hidden"
    >
      {showJustImg ? (
        <Image
          src="/assets/images/how-img.jpg"
          alt="how it works"
          width={427}
          height={407}
          className="w-full sm:h-full h-[300px]  object-cover"
        />
      ) : (
        <div className="flex flex-col justify-between gap-2 h-full w-full ">
          <div className="flex-1 h-full w-full">{children}</div>
          <div className="p-4 space-y-2 ">
            {title && (
              <h6 className="font-medium sm:text-xl text-lg m-0">{title}</h6>
            )}
            {description && (
              <p className="sm:text-sm text-xs text-gray-500 m-0">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HowItWorksCardWrapper;
