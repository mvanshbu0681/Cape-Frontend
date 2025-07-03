"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeIcon,
  MapPinIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Performance", href: "#accuracy-section" },
      { name: "Try CAPE", href: "/testing" },
    ],
    company: [
      { name: "About Us", href: "#about-section" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ],
    developers: [
      { name: "API Documentation", href: "/docs" },
      { name: "SDK", href: "/sdk" },
      { name: "GitHub", href: "https://github.com" },
      { name: "Community", href: "/community" },
    ],
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-lg border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold gradient-text">CAPE</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Context-Aware Pseudonymization Engine - Protecting sensitive
                data through intelligent, privacy-preserving technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>contact@cape-ai.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span>Privacy-First Technology</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 gradient-text">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 gradient-text-secondary">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Developer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 gradient-text">
              Developers
            </h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Get the latest updates on CAPE development, privacy technology
                insights, and industry news.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-3 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 CAPE - Context-Aware Pseudonymization Engine. All rights
            reserved.
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-400">
              Built with privacy at its core
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <ArrowUpIcon className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-500/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-500/30 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-green-500/30 rounded-full"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </footer>
  );
};

export default Footer;
