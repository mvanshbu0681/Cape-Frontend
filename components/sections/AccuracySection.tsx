"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AccuracySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimationComplete(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const nerData = [
    { entity: "PERSON", precision: 0.95, recall: 0.92, f1: 0.935 },
    { entity: "ORG", precision: 0.88, recall: 0.85, f1: 0.865 },
    { entity: "LOC", precision: 0.91, recall: 0.89, f1: 0.9 },
    { entity: "MISC", precision: 0.83, recall: 0.81, f1: 0.82 },
  ];

  const contextData = [
    { context: "Medical", accuracy: 0.94 },
    { context: "Financial", accuracy: 0.91 },
    { context: "Legal", accuracy: 0.89 },
    { context: "General", accuracy: 0.87 },
  ];

  const performanceData = [
    { name: "Accuracy", value: 93.2, color: "#3B82F6" },
    { name: "Precision", value: 91.8, color: "#9333EA" },
    { name: "Recall", value: 89.5, color: "#10B981" },
    { name: "F1-Score", value: 90.6, color: "#F59E0B" },
  ];

  interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-white font-medium">{`${label}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="accuracy-section"
      className="py-20 bg-gradient-to-b from-black/10 to-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Performance</span> & Models
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by state-of-the-art models with exceptional accuracy across
            diverse contexts
          </p>
        </motion.div>

        {/* Model Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <span className="text-white font-bold">NER</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">BERT-Large Model</h3>
                <p className="text-gray-400">Named Entity Recognition</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              dbmdz/bert-large-cased-finetuned-conll03-english
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">95.2%</div>
                <div className="text-sm text-gray-400">Precision</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">92.8%</div>
                <div className="text-sm text-gray-400">Recall</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">94.0%</div>
                <div className="text-sm text-gray-400">F1-Score</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4">
                <span className="text-white font-bold">CTX</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">DeBERTa-v3 Model</h3>
                <p className="text-gray-400">Context Classification</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">microsoft/deberta-v3-base</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-secondary">
                  91.8%
                </div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-secondary">
                  89.5%
                </div>
                <div className="text-sm text-gray-400">Precision</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-secondary">
                  90.6%
                </div>
                <div className="text-sm text-gray-400">F1-Score</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* NER Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              NER Model Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={nerData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="entity" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" domain={[0.7, 1]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="precision"
                  fill="url(#gradientBlue)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="recall"
                  fill="url(#gradientPurple)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="f1"
                  fill="url(#gradientGreen)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                  <linearGradient
                    id="gradientPurple"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#6B21A8" />
                  </linearGradient>
                  <linearGradient
                    id="gradientGreen"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Context Classification Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Context Classification Accuracy
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={contextData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="context" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" domain={[0.8, 1]} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-card p-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Overall Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceData.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={metric.color}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 56 * (1 - metric.value / 100)
                      }`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                      animate={
                        animationComplete
                          ? {
                              strokeDashoffset:
                                2 * Math.PI * 56 * (1 - metric.value / 100),
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, delay: 1.5 + index * 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: metric.color }}
                    >
                      {metric.value}%
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-300">
                  {metric.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccuracySection;
