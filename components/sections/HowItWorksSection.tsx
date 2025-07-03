"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  DocumentTextIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: DocumentTextIcon,
      title: "Input Handling",
      description:
        "Receive and preprocess text data with intelligent parsing and validation",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: CpuChipIcon,
      title: "Named Entity Recognition",
      description:
        "Leverage BERT-large-cased-finetuned-conll03-english for precise entity identification",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: "Context Classification",
      description:
        "Utilize DeBERTa-v3-base to understand contextual relationships and sensitivity levels",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: ShieldCheckIcon,
      title: "Policy Engine",
      description:
        "Apply intelligent privacy policies based on context, entity type, and sensitivity",
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
    {
      icon: ArrowsRightLeftIcon,
      title: "Pseudonymization",
      description:
        "Generate consistent, reversible pseudonyms while maintaining data relationships",
      color: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      icon: CloudIcon,
      title: "Output to LLMs",
      description:
        "Deliver privacy-protected data optimized for large language model consumption",
      color: "from-teal-500 to-blue-500",
      delay: 0.6,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How <span className="gradient-text">CAPE</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A sophisticated pipeline that intelligently processes and protects
            sensitive data through advanced NLP and context-aware
            pseudonymization
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: step.delay }}
                  className={`flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      isEven ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-card p-6 card-hover"
                    >
                      <div
                        className={`flex items-center ${
                          isEven ? "justify-end" : "justify-start"
                        } mb-4`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mr-3`}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: step.delay + 0.3 }}
                      className="relative"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} border-4 border-black relative z-10`}
                      />
                      <motion.div
                        className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} blur-lg`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: step.delay,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Experience CAPE?
            </h3>
            <p className="text-gray-300 mb-6">
              See how our advanced pipeline transforms your sensitive data into
              privacy-protected, LLM-ready content.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
              onClick={() => {
                document.getElementById("accuracy-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Performance Metrics
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
