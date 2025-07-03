"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
  CubeTransparentIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Context-Aware Privacy",
      description:
        "Intelligently understands context to apply appropriate privacy measures while preserving data utility and relationships.",
      color: "from-blue-500 to-purple-600",
      delay: 0.1,
    },
    {
      icon: ArrowPathIcon,
      title: "Consistent Pseudonymization",
      description:
        "Maintains consistency across documents while ensuring the same entities receive identical pseudonyms.",
      color: "from-purple-500 to-pink-600",
      delay: 0.2,
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Audit-Ready Mapping",
      description:
        "Comprehensive mapping system for compliance audits with full traceability and reversibility when authorized.",
      color: "from-green-500 to-teal-600",
      delay: 0.3,
    },
    {
      icon: CubeTransparentIcon,
      title: "Modular Architecture",
      description:
        "Flexible, scalable design that adapts to different use cases, industries, and privacy requirements.",
      color: "from-orange-500 to-red-600",
      delay: 0.4,
    },
    {
      icon: CloudArrowUpIcon,
      title: "Seamless LLM Integration",
      description:
        "Optimized output format designed specifically for large language model consumption and processing.",
      color: "from-indigo-500 to-blue-600",
      delay: 0.5,
    },
    {
      icon: LockClosedIcon,
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption, secure key management, and zero-trust architecture.",
      color: "from-teal-500 to-green-600",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/30 to-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CAPE delivers enterprise-grade privacy protection with cutting-edge
            technology and intelligent automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="glass-card p-8 card-hover relative group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30`}
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${
                      feature.color.split(" ")[1]
                    }, transparent)`,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your{" "}
              <span className="gradient-text">Data Privacy</span>?
            </h3>
            <p className="text-gray-300 mb-6">
              Experience the power of context-aware pseudonymization and see how
              CAPE can protect your sensitive data while maintaining its
              utility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3"
                onClick={() => {
                  window.location.href = "/testing";
                }}
              >
                Try CAPE Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-8 py-3 font-semibold text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                  document.getElementById("about-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Learn More About CAPE
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
