import React from "react";
import { motion } from "framer-motion";
import { statsData } from "../assets/assets";

const StatsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200"
        >
          <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
            {stat.number}{stat.suffix}
          </div>
          <div className="text-gray-600 text-xs md:text-sm mt-2 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default StatsSection;