"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "@/lib/constants/dummy";

import PageSubTitle from "../../atoms/PageSubTitle/PageSubTitle";
import TestimonialTitle from "../../atoms/TestimonialTitle/TestimonialTitle";
import Container from "@/components/atoms/Container/Container";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10 w-full">
          <div className="max-w-[750px] w-full flex flex-col justify-center items-center gap-2">
            <PageSubTitle title="Testimonials" />
            <TestimonialTitle />
          </div>
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#F4F4F4] via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#F4F4F4] via-gray-50/80 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-8">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out "
                style={{
                  transform: `translateX(-${currentIndex * (100 / 4 + 1.5)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`shrink-0 w-[calc(25%-18px)] min-w-[280px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                  >
                    <div className="mb-6">
                      <span className="text-xs font-semibold bg-green-50 px-4 py-1 rounded-full text-green-600 uppercase tracking-wide">
                        {testimonial.type}
                      </span>
                    </div>

                    <div className="mb-8 min-h-[140px]">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.author.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.author.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.author.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-[#009933] hover:text-white transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-[#009933] hover:text-white transition-all duration-300 flex items-center justify-center group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#009933] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
