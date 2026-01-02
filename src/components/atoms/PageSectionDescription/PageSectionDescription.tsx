"use client";

import { motion } from "framer-motion";

const PageSectionDescription = ({ description }: { description: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
      className="sm:text-lg text-gray-500 text-center"
    >
      {description}
    </motion.p>
  );
};

export default PageSectionDescription;
