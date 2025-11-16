import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  FileText, 
  Clock, 
  AlertCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const TAndC = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Rahul Developer. These Terms and Conditions govern your use of my website and services. By accessing or using my services, you agree to be bound by these Terms."
    },
    {
      title: "Services Description",
      content: "I provide web development services including but not limited to: website design, e-commerce development, CMS development, LMS platforms, and custom web applications. All services are provided on a project basis as agreed upon in our contract."
    },
    {
      title: "Payment Terms",
      content: "Projects require a 50% advance payment before work begins. The remaining 50% is due upon project completion. For ongoing projects, payment schedules will be outlined in our agreement. All payments are non-refundable once work has commenced.",
      points: [
        "50% advance payment required to start project",
        "Balance 50% due upon project completion",
        "Additional revisions beyond scope may incur extra charges",
        "Payment methods: Bank transfer, UPI, PayPal"
      ]
    },
    {
      title: "Project Timeline",
      content: "Project timelines are estimates and may vary based on project complexity and client responsiveness. I will provide a detailed timeline during our initial consultation and keep you updated on progress.",
      points: [
        "Landing Pages: 1-2 weeks",
        "E-commerce Websites: 3-6 weeks", 
        "Custom CMS: 4-8 weeks",
        "Complex Applications: 8+ weeks"
      ]
    },
    {
      title: "Client Responsibilities",
      content: "As a client, you agree to:",
      points: [
        "Provide all necessary content, images, and information in a timely manner",
        "Respond to queries and feedback within reasonable timeframes",
        "Make timely payments as per agreed schedule",
        "Provide clear and constructive feedback during review phases"
      ]
    },
    {
      title: "Intellectual Property",
      content: "Upon full payment, you will receive full ownership of the delivered website and its code. I retain the right to display the project in my portfolio and marketing materials. Third-party assets (images, fonts, plugins) may have their own licensing terms.",
      points: [
        "Client receives full ownership after final payment",
        "I retain portfolio display rights",
        "Third-party assets subject to their respective licenses",
        "Source code delivered upon project completion"
      ]
    },
    {
      title: "Revisions and Changes",
      content: "Each project includes reasonable revisions as outlined in our agreement. Major changes or additions to the original scope may require additional time and cost, which will be communicated and agreed upon in advance.",
      points: [
        "2-3 rounds of revisions included in standard packages",
        "Additional revisions billed at hourly rate",
        "Scope changes require written approval",
        "Change requests should be consolidated"
      ]
    },
    {
      title: "Warranty and Support",
      content: "I provide 30 days of free support after project delivery for any bugs or issues. This does not cover new features, major changes, or issues caused by client modifications. Extended support plans are available.",
      points: [
        "30 days free bug-fixing support",
        "Support for issues in delivered code",
        "Excludes new features and major changes",
        "Extended support plans available"
      ]
    },
    {
      title: "Limitation of Liability",
      content: "I strive to deliver high-quality services, but I cannot guarantee specific business results. My liability is limited to the project fee paid. I'm not liable for indirect damages, loss of data, or business interruptions."
    },
    {
      title: "Termination",
      content: "Either party may terminate a project with written notice. If terminated by client after work has commenced, payment will be due for work completed up to that point. All materials and code remain my property until full payment is received."
    },
    {
      title: "Governing Law",
      content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi, India."
    },
    {
      title: "Changes to Terms",
      content: "I reserve the right to modify these Terms at any time. Continued use of my services after changes constitutes acceptance of the modified Terms. Significant changes will be communicated to existing clients."
    }
  ];

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
              Please read these terms carefully before using my services. 
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
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>

                  {section.points && (
                    <ul className="space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
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