"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg particle-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block">Context-Aware</span>
            <span className="block gradient-text">Pseudonymization</span>
            <span className="block">Engine</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Protecting sensitive data through{" "}
            <span className="gradient-text-secondary font-semibold">
              intelligent, context-aware pseudonymization
            </span>
            . Built for the future of privacy-preserving AI.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link href="/testing">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
              >
                <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Try CAPE Now</span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Technology Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            {[
              "BERT NER",
              "DeBERTa Classifier",
              "Context-Aware",
              "Privacy-First",
              "LLM Ready",
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-card px-4 py-2 text-sm font-medium text-blue-200 hover:text-white hover:scale-105 transition-all duration-300"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer"
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="glass-card p-4 text-sm font-mono text-green-400"
        >
          <div className="text-xs text-gray-500 mb-2">Input:</div>
          <div>&quot;John Smith works at ACME Corp&quot;</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="glass-card p-4 text-sm font-mono text-blue-400"
        >
          <div className="text-xs text-gray-500 mb-2">Output:</div>
          <div>&quot;[PERSON_001] works at [ORG_001]&quot;</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
