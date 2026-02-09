"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";

import { agroInsights } from "@/features/insights/constants/dummy";

const InsightFloat = () => {
  const duplicatedInsights = [...agroInsights, ...agroInsights];

  return (
    <div className="fixed bottom-4 left-0 right-0 w-full z-50">
      <Container>
        <div className="w-full bg-black/90 h-12 rounded-md flex items-center px-4 overflow-hidden">
          <p className="text-white/75 font-medium text-sm pr-6 shrink-0">
            Latest News:
          </p>

          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedInsights.map((news, index) => (
                <Link
                  href={`/inghts/info/${news?.id}`}
                  key={`${news.id}-${index}`}
                  className="text-white text-sm opacity-70 hover:text-green-600 transition-all duration-300"
                >
                  {news.title}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InsightFloat;
