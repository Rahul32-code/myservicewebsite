// components/ServicesCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { services, colorSchemes } from "../assets/assets";

const ServicesCard = () => {
  return (
    <>
      {services.slice(0, 6).map((service, index) => {
        const Icon = service.icon;
        const color = colorSchemes.services[index];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${color.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <Icon className="text-white" size={24} />
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{service.description}</p>
            
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle size={14} className={`${color.text} flex-shrink-0`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </>
  );
};

export default ServicesCard;