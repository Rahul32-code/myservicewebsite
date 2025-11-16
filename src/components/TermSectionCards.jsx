import React from "react";
import { termSections } from "../assets/assets";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TermSectionCards = () => {
  return (
    <>
      {termSections.map((section, index) => (
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
                <li
                  key={pointIndex}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-500 mt-1 flex-shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default TermSectionCards;
