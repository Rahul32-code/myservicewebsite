
import React from 'react'
import { faqCategories } from '../assets/assets';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqCards = ({ openFaq, toggleFaq }) => {
  return (
    <>
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
    </>
  )
}

export default FaqCards