import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioItems } from "../assets/assets";

const PortfolioCard = () => {
  return (
    <>
      {portfolioItems.slice(0, 3).map((project, index) => {
        const projectGradients = [
          "from-blue-400 to-blue-600",
          "from-purple-400 to-purple-600",
          "from-green-400 to-green-600",
        ];
        const gradient = projectGradients[index];

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
            <div
              className={`h-40 md:h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="bg-white/90 text-gray-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  🔥 Featured
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={`/portfolio/${project.id}`}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base block text-center"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default PortfolioCard;
