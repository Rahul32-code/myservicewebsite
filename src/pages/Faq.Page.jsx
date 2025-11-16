import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
  Shield,
  CreditCard,
  Globe,
  Database,
  Users
} from "lucide-react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: Globe,
      faqs: [
        {
          question: "What services do you offer?",
          answer: "I offer comprehensive web development services including landing pages, e-commerce solutions, blog platforms, CMS development, LMS platforms, and dynamic websites using modern technologies like PHP, React, and Node.js."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. Landing pages: 1-2 weeks, E-commerce: 3-6 weeks, Custom CMS: 4-8 weeks. I provide detailed timelines during our initial consultation."
        },
        {
          question: "Do you work with international clients?",
          answer: "Yes, I work with clients worldwide. I'm comfortable with different time zones and use tools like Slack, Zoom, and email for smooth communication."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: CreditCard,
      faqs: [
        {
          question: "What's your pricing structure?",
          answer: "I offer project-based pricing for clarity. After understanding your requirements, I provide a fixed quote. For ongoing work, I also offer hourly rates and monthly retainers."
        },
        {
          question: "Do you require upfront payment?",
          answer: "I typically require a 50% deposit to start the project, with the remaining 50% due upon completion. For larger projects, we can discuss milestone-based payments."
        },
        {
          question: "What payment methods do you accept?",
          answer: "I accept bank transfers, UPI, PayPal, and other digital payment methods. All payments are secure and invoiced properly."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: Database,
      faqs: [
        {
          question: "What technologies do you use?",
          answer: "I work with PHP, React, Node.js, MySQL, MongoDB, Tailwind CSS, and various frameworks. I choose the best technology stack based on your project requirements."
        },
        {
          question: "Do you provide website maintenance?",
          answer: "Yes, I offer ongoing maintenance packages that include updates, security patches, backups, and technical support to keep your website running smoothly."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely! All websites I develop are fully responsive and optimized for all devices - desktop, tablet, and mobile."
        }
      ]
    },
    {
      title: "Support & Communication",
      icon: Users,
      faqs: [
        {
          question: "What's your communication process?",
          answer: "I maintain regular communication through your preferred channel (email, WhatsApp, video calls). Weekly progress updates and quick response times are my standard."
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Yes, I offer 30 days of free support after project completion. After that, you can choose from my maintenance plans for ongoing support."
        },
        {
          question: "What are your working hours?",
          answer: "I'm available Monday to Saturday, 9 AM to 6 PM IST. For urgent matters, I'm reachable beyond these hours as well."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Talk directly for complex queries",
      action: "Call Now",
      color: "bg-blue-500",
      link: "tel:+91987654321"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses within hours",
      action: "Send Email",
      color: "bg-purple-500",
      link: "mailto:test@s.com"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              FAQ & <span className="text-blue-600">Support</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Find answers to common questions about my services, pricing, and process. 
              Can't find what you're looking for? I'm here to help!
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto"
            >
              {[
                { number: "24h", label: "Avg Response" },
                { number: "100%", label: "Satisfaction" },
                { number: "50+", label: "Questions" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get <span className="text-blue-600">Quick Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to get the support you need, when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  {option.link ? (
                    <a
                      href={option.link}
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      {option.action}
                    </a>
                  ) : (
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      {option.action}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through the most common questions from my clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <CategoryIcon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="divide-y divide-gray-200">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="p-6">
                        <button
                          onClick={() => toggleFaq(`${categoryIndex}-${faqIndex}`)}
                          className="flex justify-between items-center w-full text-left"
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {openFaq === `${categoryIndex}-${faqIndex}` ? (
                            <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {openFaq === `${categoryIndex}-${faqIndex}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4"
                            >
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-white" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Please reach out to me directly. 
              I'm always happy to help with any questions you might have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me Now
              </Link>
              
              <a 
                href="mailto:test@s.com"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faq;