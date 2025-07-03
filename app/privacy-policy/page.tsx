"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-dark to-purple-900/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Welcome to CAPE (Computer-Aided Plagiarism Evaluation). This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our service.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Personal Information
                      </h3>
                      <p>
                        We may collect personal information such as your name,
                        email address, and account credentials when you register
                        for our service.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Document Content
                      </h3>
                      <p>
                        When you upload documents for plagiarism checking, we
                        temporarily process the content to provide our services.
                        This content is not stored permanently on our servers.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Usage Data
                      </h3>
                      <p>
                        We collect information about how you use our service,
                        including IP addresses, browser types, and usage
                        patterns to improve our platform.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      • <strong>Service Provision:</strong> To analyze documents
                      for plagiarism and provide detection results
                    </p>
                    <p>
                      • <strong>Account Management:</strong> To create and
                      manage your user account and preferences
                    </p>
                    <p>
                      • <strong>Communication:</strong> To send you
                      service-related notifications and updates
                    </p>
                    <p>
                      • <strong>Improvement:</strong> To enhance our AI models
                      and improve detection accuracy
                    </p>
                    <p>
                      • <strong>Security:</strong> To protect against fraud,
                      abuse, and security threats
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    3. Information Sharing and Disclosure
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties except in the following
                      circumstances:
                    </p>
                    <p>
                      • <strong>Service Providers:</strong> Trusted partners who
                      assist in operating our platform under strict
                      confidentiality agreements
                    </p>
                    <p>
                      • <strong>Legal Requirements:</strong> When required by
                      law, court order, or government request
                    </p>
                    <p>
                      • <strong>Safety Protection:</strong> To protect the
                      rights, property, or safety of CAPE, our users, or others
                    </p>
                    <p>
                      • <strong>Business Transfers:</strong> In connection with
                      mergers, acquisitions, or asset sales with proper
                      notification
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    4. Data Security
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      We implement robust security measures to protect your
                      information:
                    </p>
                    <p>
                      • <strong>Encryption:</strong> All data is encrypted in
                      transit and at rest using industry-standard protocols
                    </p>
                    <p>
                      • <strong>Access Controls:</strong> Strict access
                      limitations to personal data on a need-to-know basis
                    </p>
                    <p>
                      • <strong>Regular Audits:</strong> Periodic security
                      assessments and vulnerability testing
                    </p>
                    <p>
                      • <strong>Secure Infrastructure:</strong> Cloud-based
                      systems with enterprise-grade security standards
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    5. Data Retention
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      • <strong>Document Content:</strong> Uploaded documents
                      are processed and deleted immediately after analysis
                    </p>
                    <p>
                      • <strong>Account Data:</strong> Personal information is
                      retained while your account is active and for a reasonable
                      period thereafter
                    </p>
                    <p>
                      • <strong>Usage Logs:</strong> Aggregated, anonymized
                      usage data may be retained for service improvement
                      purposes
                    </p>
                    <p>
                      • <strong>Legal Compliance:</strong> Some data may be
                      retained longer if required by applicable laws or
                      regulations
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      You have the following rights regarding your personal
                      information:
                    </p>
                    <p>
                      • <strong>Access:</strong> Request access to your personal
                      data we hold
                    </p>
                    <p>
                      • <strong>Correction:</strong> Request correction of
                      inaccurate or incomplete information
                    </p>
                    <p>
                      • <strong>Deletion:</strong> Request deletion of your
                      personal data (subject to legal requirements)
                    </p>
                    <p>
                      • <strong>Portability:</strong> Request a copy of your
                      data in a structured, machine-readable format
                    </p>
                    <p>
                      • <strong>Opt-out:</strong> Unsubscribe from marketing
                      communications at any time
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    7. Cookies and Tracking Technologies
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>We use cookies and similar technologies to:</p>
                    <p>
                      • <strong>Essential Functions:</strong> Enable core
                      website functionality and user authentication
                    </p>
                    <p>
                      • <strong>Analytics:</strong> Understand usage patterns
                      and improve our service
                    </p>
                    <p>
                      • <strong>Preferences:</strong> Remember your settings and
                      preferences
                    </p>
                    <p>
                      You can control cookie settings through your browser
                      preferences.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    8. International Data Transfers
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure appropriate
                      safeguards are in place for such transfers, including:
                    </p>
                    <p>
                      • <strong>Adequacy Decisions:</strong> Transfers to
                      countries with adequate data protection laws
                    </p>
                    <p>
                      • <strong>Standard Contractual Clauses:</strong>{" "}
                      EU-approved contract terms for data protection
                    </p>
                    <p>
                      • <strong>Certification Programs:</strong> Privacy Shield
                      or similar certification frameworks
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    9. Children's Privacy
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      CAPE is not intended for children under 13 years of age.
                      We do not knowingly collect personal information from
                      children under 13. If we discover that we have collected
                      information from a child under 13, we will promptly delete
                      such information.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    10. Changes to This Privacy Policy
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      We may update this Privacy Policy from time to time. When
                      we make changes, we will:
                    </p>
                    <p>
                      • <strong>Notify Users:</strong> Send email notifications
                      for material changes
                    </p>
                    <p>
                      • <strong>Update Date:</strong> Revise the "Effective
                      Date" at the top of this policy
                    </p>
                    <p>
                      • <strong>Website Notice:</strong> Post prominent notices
                      on our website
                    </p>
                    <p>
                      Continued use of our service after changes constitutes
                      acceptance of the updated policy.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="border-t border-white/20 pt-8"
                >
                  <h2 className="text-2xl font-bold gradient-text-secondary mb-4">
                    11. Contact Us
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      If you have questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 mt-4">
                      <p>
                        <strong>Email:</strong> privacy@cape-ai.com
                      </p>
                      <p>
                        <strong>Address:</strong> CAPE Privacy Team, 123 AI
                        Innovation Drive, Tech Valley, CA 94000
                      </p>
                      <p>
                        <strong>Phone:</strong> +1 (555) 123-CAPE
                      </p>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      We will respond to privacy-related inquiries within 30
                      days of receipt.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
