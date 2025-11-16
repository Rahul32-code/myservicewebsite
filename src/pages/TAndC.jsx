import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  FileText, 
  Clock, 
  AlertCircle,
  ArrowRight
} from "lucide-react";
import TermSectionCards from "../components/TermSectionCards";

const TAndC = () => {
  const lastUpdated = "November 1, 2025";

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Shield className="text-white" size={32} />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Terms & <span className="text-blue-600">Conditions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Please read these terms carefully before using Our services. 
              These terms outline our mutual responsibilities and ensure a smooth working relationship.
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { icon: FileText, text: "Legal Agreement" },
                { icon: Clock, text: `Last Updated: ${lastUpdated}` },
                { icon: AlertCircle, text: "Please Read Carefully" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 justify-center text-gray-700">
                    <Icon size={20} className="text-blue-600" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-yellow-700">
                    These Terms and Conditions constitute a legal agreement between you and Rahul Developer. 
                    By proceeding with any project or service, you acknowledge that you have read, understood, 
                    and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-12">
              <TermSectionCards />
            </div>

            {/* Acceptance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agreement Acceptance
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                By proceeding with any project or service, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and Conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  Contact for Questions
                  <ArrowRight size={20} />
                </Link>
                
                <a 
                  href="/privacy-policy" 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Privacy Policy
                </a>
              </div>
            </motion.div>

            {/* Contact for Clarifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600">
                If you have any questions about these Terms and Conditions, please don't hesitate to{" "}
                <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
                  contact me
                </Link>
                .
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TAndC;