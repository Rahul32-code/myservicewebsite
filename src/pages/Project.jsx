import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { portfolioItems } from "../assets/assets";
import CTASection from "../components/CTASection";

const Project = () => {
  const projectGradients = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600", 
    "from-green-400 to-green-600",
    "from-orange-400 to-orange-600",
    "from-red-400 to-red-600",
    "from-indigo-400 to-indigo-600"
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
              Our <span className="text-blue-600">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Explore my latest projects and see how I've helped businesses 
              transform their digital presence with modern web solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              All Projects
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              E-Commerce
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              LMS
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Blog
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Landing Pages
            </button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project, index) => {
              const gradient = projectGradients[index % projectGradients.length];
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200"
                >
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex gap-2">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                          <ExternalLink size={16} />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Github size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm flex items-center justify-center gap-2">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: portfolioItems.length, label: "Total Projects" },
                { number: "6+", label: "Categories" },
                { number: "10+", label: "Technologies" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Project;