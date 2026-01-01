"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const PageSubTitle = ({
  imgUrl,
  alt,
  title,
}: {
  alt?: string;
  imgUrl?: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
      className="py-1 px-4 rounded-full border border-gray-200 flex items-center gap-1"
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={alt || "title"}
          width={14}
          height={14}
          className="w-6 h-6 object-contain"
        />
      )}
      <p className="text-sm font-medium text-center">{title}</p>
    </motion.div>
  );
};

export default PageSubTitle;
