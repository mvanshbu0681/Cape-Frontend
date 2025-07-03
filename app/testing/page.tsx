"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon,
  ArrowPathIcon,
  ClipboardDocumentIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import toast, { Toaster } from "react-hot-toast";

const TestingPage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("text");

  const exampleTexts = [
    {
      title: "Medical Record",
      text: "Patient John Smith, DOB 1985-03-15, visited Dr. Sarah Johnson at Mayo Clinic on 2024-01-15. Contact: john.smith@email.com, phone: (555) 123-4567.",
    },
    {
      title: "Business Document",
      text: "Sarah Williams from Microsoft Corporation will meet with David Chen from Apple Inc. at their Seattle office located at 123 Tech Avenue, Seattle, WA 98101.",
    },
    {
      title: "Legal Document",
      text: "Attorney Michael Davis (Bar ID: 12345) representing plaintiff Jane Rodriguez in the case against XYZ Corporation filed on March 10, 2024.",
    },
  ];

  const handleProcess = async () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to process");
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate API call with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock pseudonymization logic
      let processed = inputText;

      // Replace names
      processed = processed.replace(/John Smith/g, "[PERSON_001]");
      processed = processed.replace(/Sarah Johnson/g, "[PERSON_002]");
      processed = processed.replace(/Sarah Williams/g, "[PERSON_003]");
      processed = processed.replace(/David Chen/g, "[PERSON_004]");
      processed = processed.replace(/Michael Davis/g, "[PERSON_005]");
      processed = processed.replace(/Jane Rodriguez/g, "[PERSON_006]");

      // Replace organizations
      processed = processed.replace(/Mayo Clinic/g, "[ORG_001]");
      processed = processed.replace(/Microsoft Corporation/g, "[ORG_002]");
      processed = processed.replace(/Apple Inc\./g, "[ORG_003]");
      processed = processed.replace(/XYZ Corporation/g, "[ORG_004]");

      // Replace locations
      processed = processed.replace(
        /123 Tech Avenue, Seattle, WA 98101/g,
        "[LOC_001]"
      );
      processed = processed.replace(/Seattle/g, "[LOC_002]");

      // Replace emails and phones
      processed = processed.replace(/john\.smith@email\.com/g, "[EMAIL_001]");
      processed = processed.replace(/\(555\) 123-4567/g, "[PHONE_001]");

      // Replace dates
      processed = processed.replace(/1985-03-15/g, "[DATE_001]");
      processed = processed.replace(/2024-01-15/g, "[DATE_002]");
      processed = processed.replace(/March 10, 2024/g, "[DATE_003]");

      // Replace IDs
      processed = processed.replace(/Bar ID: 12345/g, "Bar ID: [ID_001]");

      setOutputText(processed);
      toast.success("Text processed successfully!");
    } catch (error) {
      toast.error("Processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    toast.success("Cleared successfully");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const loadExample = (example) => {
    setInputText(example.text);
    setOutputText("");
    toast.success(`Loaded: ${example.title}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          },
        }}
      />

      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Try <span className="gradient-text">CAPE</span> Live
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of context-aware pseudonymization. Enter your
              text below and see how CAPE intelligently protects sensitive
              information.
            </p>
          </motion.div>

          {/* Example Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {exampleTexts.map((example, index) => (
              <motion.button
                key={example.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => loadExample(example)}
                className="glass-card px-4 py-2 text-sm font-medium text-blue-200 hover:text-white transition-all duration-300"
              >
                <SparklesIcon className="w-4 h-4 inline-block mr-2" />
                {example.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Interface */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 card-hover">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <ExclamationTriangleIcon className="w-6 h-6 text-orange-400 mr-2" />
                    Without CAPE
                  </h2>
                  <div className="text-sm text-gray-400">
                    Raw Sensitive Data
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your text containing sensitive information here..."
                    className="w-full h-64 p-4 bg-black/30 border-2 border-orange-400/30 rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:border-orange-400 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopy(inputText)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      disabled={!inputText}
                    >
                      <ClipboardDocumentIcon className="w-4 h-4 text-gray-300" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-400">
                    Characters: {inputText.length}
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClear}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
                    >
                      Clear
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 card-hover">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-2" />
                    With CAPE
                  </h2>
                  <div className="text-sm text-gray-400">Privacy Protected</div>
                </div>

                <div className="relative">
                  <textarea
                    value={outputText}
                    readOnly
                    placeholder="Processed output will appear here..."
                    className="w-full h-64 p-4 bg-black/30 border-2 border-green-400/30 rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none"
                  />
                  <div className="absolute top-3 right-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopy(outputText)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      disabled={!outputText}
                    >
                      <ClipboardDocumentIcon className="w-4 h-4 text-gray-300" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-400">
                    Characters: {outputText.length}
                  </div>
                  <div className="text-sm text-green-400">
                    {outputText ? "✓ Privacy Protected" : "Ready to process"}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProcess}
              disabled={isProcessing || !inputText.trim()}
              className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isProcessing ? (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center space-x-3"
                  >
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="process"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center space-x-3"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span>Process with CAPE</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Context-Aware</h3>
              <p className="text-gray-300 text-sm">
                Understands the context to apply appropriate pseudonymization
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Consistent</h3>
              <p className="text-gray-300 text-sm">
                Same entities receive identical pseudonyms across documents
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                <ArrowPathIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Reversible</h3>
              <p className="text-gray-300 text-sm">
                Maintains audit trail for authorized data reconstruction
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TestingPage;
