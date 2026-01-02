"use client";

import { useState } from "react";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import FaqTitle from "@/components/atoms/FaqTitle/FaqTitle";

import { faqs } from "@/lib/constants/faq";

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10">
          <div className="max-w-[870px] w-full flex flex-col justify-center items-center gap-2">
            <FaqTitle />
          </div>
          <section className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 pb-20">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          {faq.question}
                        </h3>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 shrink-0"
                      >
                        {openId === faq.id ? (
                          <Minus className="w-5 h-5 text-slate-400" />
                        ) : (
                          <Plus className="w-5 h-5 text-slate-400" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openId === faq?.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-slate-600 leading-relaxed">
                              {faq?.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default FaqSection;
