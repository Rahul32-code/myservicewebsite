import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Calendar } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  // Color scheme for different sections
  const colorSchemes = {
    primary: {
      gradient: "from-blue-600 to-purple-600",
      solid: "bg-blue-500",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    contact: [
      {
        icon: Phone,
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-50",
        text: "text-green-600",
      },
      {
        icon: Mail,
        color: "from-orange-500 to-red-500",
        bg: "bg-orange-50",
        text: "text-orange-600",
      },
      {
        icon: MapPin,
        color: "from-purple-500 to-indigo-500",
        bg: "bg-purple-50",
        text: "text-purple-600",
      },
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's Create Something
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Amazing Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to start your project? Get in touch and let's discuss how I
            can help bring your digital ideas to life.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm always excited to take on new projects and help businesses
                  grow through custom web solutions. Let's discuss your
                  requirements and create something amazing together.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 962-5968-793",
                    link: "tel:+919625968793",
                    description: "Call me directly",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "rahuldeveloper75@gmail.com",
                    link: "mailto:rahuldeveloper75@gmail.com",
                    description: "Send me an email",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Ghaziabad, Uttar Pradesh",
                    link: null,
                    description: "Ghaziabad, Uttar Pradesh",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const color = colorSchemes.contact[index];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center gap-4 p-6 ${color.bg} rounded-2xl shadow-lg border ${colorSchemes.primary.border} hover:shadow-xl transition-all duration-300`}
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${color.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {item.description}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className={`${color.text} hover:underline font-medium text-base transition-colors`}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-white" size={24} />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3 text-white/90">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Monday - Friday
                    </span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Saturday
                    </span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Sunday
                    </span>
                    <span className="font-semibold text-red-200">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Message
                </h3>
                <p className="text-gray-600 mt-2">
                  Fill out the form below and I'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="blog">Blog Website</option>
                      <option value="cms">CMS Development</option>
                      <option value="lms">LMS Platform</option>
                      <option value="dynamic">Dynamic Website</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">₹5,000 - ₹15,000</option>
                    <option value="15k-30k">₹15,000 - ₹30,000</option>
                    <option value="30k-50k">₹30,000 - ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                <p className="text-center text-gray-500 text-sm">
                  Typically replies within 2-4 hours during business days
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Response Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Call me directly for urgent projects or quick consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+91987654321"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📞 Call Now: +91 9625968793
              </a>
              <a
                href="https://wa.me/919625968793"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
