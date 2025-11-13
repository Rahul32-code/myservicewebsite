import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link } from "react-router-dom";
import { Grip, X } from "lucide-react"; // Icons

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between 
      px-8 md:px-16 lg:px-24 xl:px-32 py-5 
      bg-white text-slate-800 shadow-md border-b border-teal-200 
      z-50"
    >
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="h-10 text-teal-700" />
      </Link>

      {/* Desktop Menu */}
      <div className="space-x-10 hidden md:flex text-lg font-semibold">
        {menuLinks.map((links, index) => (
          <Link
            key={index}
            to={links.path}
            className="text-slate-500 hover:text-slate-600 transition-all duration-300"
          >
            {links.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 border border-slate-700 text-slate-700 text-2xl bg-white rounded-md 
          shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] 
          active:translate-y-[2px] 
          active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.3)] 
          transition-all duration-150"
        >
          {mobileMenuOpen ? <X /> : <Grip />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl border-l border-teal-200 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 p-6 space-y-4 text-lg font-semibold text-slate-700">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block py-2 hover:text-teal-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
