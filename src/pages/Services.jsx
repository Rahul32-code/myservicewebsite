import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "../assets/assets";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Service-specific colors
  const serviceColors = [
    { primary: "bg-blue-500", gradient: "from-blue-500 to-blue-600", light: "bg-blue-50", border: "border-blue-500", text: "text-blue-700" },
    { primary: "bg-purple-500", gradient: "from-purple-500 to-purple-600", light: "bg-purple-50", border: "border-purple-500", text: "text-purple-700" },
    { primary: "bg-green-500", gradient: "from-green-500 to-green-600", light: "bg-green-50", border: "border-green-500", text: "text-green-700" },
    { primary: "bg-orange-500", gradient: "from-orange-500 to-orange-600", light: "bg-orange-50", border: "border-orange-500", text: "text-orange-700" },
    { primary: "bg-red-500", gradient: "from-red-500 to-red-600", light: "bg-red-50", border: "border-red-500", text: "text-red-700" },
    { primary: "bg-indigo-500", gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50", border: "border-indigo-500", text: "text-indigo-700" }
  ];

  const getServiceColor = (index) => {
    return serviceColors[index % serviceColors.length];
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive web development solutions using modern technologies like PHP, React, and Node.js
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service List */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const color = getServiceColor(index);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-white shadow-xl border-l-4 ' + color.border
                        : 'bg-white/50 shadow-lg hover:shadow-xl'
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        activeService === index 
                          ? color.primary + ' text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Service Details */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${getServiceColor(activeService).gradient} rounded-xl flex items-center justify-center mb-6`}>
                {React.createElement(services[activeService].icon, { 
                  size: 32, 
                  className: "text-white" 
                })}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-3 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className={`${getServiceColor(activeService).primary} text-white rounded-full flex-shrink-0`} size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`${getServiceColor(activeService).light} p-6 rounded-xl border ${getServiceColor(activeService).primary} border-opacity-20`}>
                <h4 className={`font-semibold text-white mb-2`}>Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "React", "Node.js", "MySQL", "MongoDB", "Tailwind CSS"].map((tech, index) => (
                    <span key={index} className={`${getServiceColor(activeService).light} text-white px-3 py-1 rounded-full text-sm border ${getServiceColor(activeService).primary} border-opacity-30`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className={`w-full mt-6 bg-gradient-to-r ${getServiceColor(activeService).gradient} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                Get This Service
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure quality and timely delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals", color: "bg-blue-500" },
              { step: "02", title: "Planning", description: "Creating project roadmap and architecture", color: "bg-purple-500" },
              { step: "03", title: "Development", description: "Building with modern technologies and best practices", color: "bg-green-500" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support", color: "bg-orange-500" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;