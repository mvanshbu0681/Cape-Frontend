"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Privacy First",
      description:
        "Every decision is made with privacy and data protection as the top priority.",
    },
    {
      icon: AcademicCapIcon,
      title: "Research Driven",
      description:
        "Built on cutting-edge research in NLP, machine learning, and privacy engineering.",
    },
    {
      icon: UserGroupIcon,
      title: "Community Focused",
      description:
        "Designed to serve organizations, researchers, and developers worldwide.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Innovation Led",
      description:
        "Continuously pushing the boundaries of what's possible in privacy technology.",
    },
  ];

  return (
    <section id="about-section" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">CAPE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Context-Aware Pseudonymization Engine represents a breakthrough
            in privacy-preserving technology, born from the critical need to
            protect sensitive data in our AI-driven world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                In an era where artificial intelligence and large language
                models are revolutionizing how we process information, the
                challenge of protecting sensitive data has never been more
                critical. Traditional anonymization techniques often fall short,
                either compromising data utility or failing to provide adequate
                protection.
              </p>
              <p>
                CAPE was conceived to bridge this gap—delivering
                enterprise-grade privacy protection while preserving the
                contextual relationships that make data valuable for AI
                applications. Our context-aware approach ensures that sensitive
                information is protected without sacrificing the intelligence
                and insights that drive innovation.
              </p>
              <p>
                We believe that privacy and utility should not be mutually
                exclusive. CAPE makes it possible to harness the full power of
                your data while maintaining the highest standards of privacy
                protection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    2024
                  </div>
                  <div className="text-gray-400">CAPE Development Begins</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      94%+
                    </div>
                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      6
                    </div>
                    <div className="text-sm text-gray-400">
                      Processing Steps
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      Privacy Protected
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400 mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-gray-400">Scalability</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
              animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Built with Cutting-Edge Technology
          </h3>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold mb-4 gradient-text">
                  Machine Learning
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div>BERT Transformers</div>
                  <div>DeBERTa Models</div>
                  <div>Custom NLP Pipeline</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 gradient-text-secondary">
                  Privacy Engineering
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div>Context-Aware Algorithms</div>
                  <div>Consistent Pseudonymization</div>
                  <div>Audit Trail Management</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 gradient-text">
                  Enterprise Ready
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div>Scalable Architecture</div>
                  <div>RESTful APIs</div>
                  <div>Security-First Design</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
