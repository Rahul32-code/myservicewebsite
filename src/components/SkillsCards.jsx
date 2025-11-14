import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const SkillsCards = ({ className = "" }) => {
  return (
    <>
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {skill.name}
                </h3>
                <p className="text-blue-600 font-bold">{skill.level}%</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillsCards;