import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that
            drives results for your business.
          </p>

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
  );
};

export default CTASection;
