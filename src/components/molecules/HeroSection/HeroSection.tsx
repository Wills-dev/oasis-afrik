"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import HeroTitle from "@/components/atoms/HeroTitle/HeroTitle";
import HeroParagraph from "../HeroParagraph/HeroParagraph";
import Button from "@/components/atoms/Button/Button";

const HeroSection = () => {
  return (
    <div className="sm:pt-24 pt-10 pb-10">
      <Container>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[772.22px] w-full py-8 ">
            <div className="flex flex-col justify-center items-center max-sm:gap-2">
              <PageSubTitle
                imgUrl="/assets/images/globe.svg"
                title="Connecting african trade"
              />
              <div className=" relative w-full max-sm:space-y-2">
                <div className="absolute w-full top-10 left-0 right-0 max-h-[545.18px] h-auto">
                  <Image
                    src="/assets/images/World.svg"
                    height={700}
                    width={780}
                    alt="world"
                    className="w-full h-auto"
                  />
                </div>
                <HeroTitle />
                <HeroParagraph />
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    className="flex justify-center"
                  >
                    <Button width="w-fit" href="/login">
                      Start Trading Securely
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
