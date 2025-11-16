import React from "react";
import { Link } from "react-router-dom";
import { assets, menuLinks, socialLinks } from "../assets/assets";
import { Mail, MapPin, Phone } from "lucide-react";
import {portfolioItems} from "../assets/assets";

const Footer = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-sky-400" />,
      name: "+91 962-5968-793",
      href: "tel:+919625968793",
    },
    {
      icon: <Mail className="h-5 w-5 text-rose-400" />,
      name: "rahuldeveloper75@gmail.com",
      href: "mailto:rahuldeveloper75@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-green-400" />,
      name: "Ghaziabad, Uttar Pradesh",
    },
  ];

  // Social media original colors
  const getSocialMediaColor = (platform) => {
    const colors = {
      Github: "hover:bg-gray-900 hover:border-gray-900 text-gray-600",
      Linkedin: "hover:bg-blue-600 hover:border-blue-600 text-blue-600", 
      Twitter: "hover:bg-black hover:border-black text-black",
      Facebook: "hover:bg-blue-600 hover:border-blue-600 text-blue-600",
      Instagram: "hover:bg-pink-600 hover:border-pink-600 text-pink-600",
      Youtube: "hover:bg-red-600 hover:border-red-600 text-red-600"
    };
    return colors[platform] || "hover:bg-teal-600 hover:border-teal-600 text-teal-600";
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-cyan-100 blur-3xl opacity-70"></div>

      <div className="relative backdrop-blur-2xl bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-t border-teal-200">
        {/* Top Section */}
        <div className="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div className="space-y-4">
            <img
              src={assets.logo}
              alt="logo"
              className="h-10 mb-2 drop-shadow-md"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              We provide quality services with professionalism and creativity.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                const platformName = link.icon.name || link.name || "Social";
                return (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full border bg-white/80 hover:text-white shadow-sm hover:shadow-md transition-all duration-300 ${getSocialMediaColor(platformName)}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3 text-lg drop-shadow-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-teal-600 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3 text-lg drop-shadow-sm">
              Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              {portfolioItems.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.title}
                    className="hover:text-teal-600 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3 text-lg drop-shadow-sm">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-2 hover:text-teal-600 transition-colors"
                    >
                      {item.icon} {item.name}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2">{item.icon} {item.name}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-200 py-4 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between items-center bg-white/60 backdrop-blur-lg text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-teal-600">Rahul Developer</span>.
            All rights reserved.
          </p>

          <ul className="flex space-x-4 mt-2 md:mt-0">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms" },
              { name: "FAQs", path: "/faq" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-teal-600 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;