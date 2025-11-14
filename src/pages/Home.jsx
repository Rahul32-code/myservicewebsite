import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Rocket, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import StatsSection from "../components/StatsSection";
import ServicesCard from "../components/ServiceCard";
import PortfolioCard from "./PortfolioCard";

const Counter = ({ value, suffix = "", color = "text-blue-600" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2
      }}
      className={`text-2xl md:text-3xl font-bold ${color}`}
    >
      {inView ? `${value}${suffix}` : `0${suffix}`}
    </motion.div>
  );
};

const Home = () => {

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-purple-100/20 to-pink-100/40"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Zap size={16} className="text-yellow-300" />
                Professional Web Development Services
                <Rocket size={16} className="text-green-300" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                Digital Presence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              I create stunning, high-performance websites and web applications using modern technologies like PHP, React, and Node.js. Let's bring your digital vision to life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket size={20} />
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link 
                to="/portfolio" 
                className="border-2 border-blue-500 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Star size={20} />
                View My Work
              </Link>
            </motion.div>
            
            {/* Stats */}
            <StatsSection />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServicesCard />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Explore All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              See how we helped businesses transform their digital presence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <PortfolioCard />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal CTA Section */}
<section className="py-20 md:py-24 bg-gray-50 text-gray-900 border-t border-gray-200">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Get Started?
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Let's discuss your project requirements and create a solution that drives results for your business.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          to="/contact" 
          className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-black transition-colors duration-300 flex items-center gap-3"
        >
          <MessageCircle size={20} />
          Get Free Quote
        </Link>
        
        <a 
          href="tel:+91987654321" 
          className="text-gray-700 px-8 py-4 rounded-lg font-semibold hover:text-blue-600 transition-colors duration-300 flex items-center gap-3"
        >
          <Phone size={20} />
          +91 9876 54321
        </a>
      </div>

      {/* Quick Info */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>No upfront cost</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>24-48 hour response</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;