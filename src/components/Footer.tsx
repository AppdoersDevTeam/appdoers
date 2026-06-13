import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { brand } from '../content/siteContent';

const Footer: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const renderDropdownButton = (section: string, title: string) => (
    <button
      onClick={() => toggleDropdown(section)}
      className="flex items-center justify-between w-full text-xl font-bold mb-4 text-white md:hidden"
    >
      {title}
      {activeDropdown === section ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );

  const renderSection = (section: string, title: string, content: React.ReactNode) => (
    <div className="mb-8 md:mb-0">
      <h3 className="hidden md:block text-xl font-bold mb-4 text-white">{title}</h3>
      {renderDropdownButton(section, title)}
      <div className={`${activeDropdown === section ? 'block' : 'hidden'} md:block`}>{content}</div>
    </div>
  );

  return (
    <footer className="bg-[#086375] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block">
              <img src="/images/logo.png" alt="Appdoers Logo" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-white/90 max-w-md">
              High-end digital agency. {brand.location}
            </p>
            {brand.social?.linkedin && (
              <div className="flex space-x-4 mt-6">
                <a
                  href={brand.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            )}
          </div>

          {renderSection(
            'quick-links',
            'Quick Links',
            <ul className="space-y-2">
              <li>
                <Link to="/work" className="text-gray-300 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          )}

          {renderSection(
            'services',
            'Services',
            <ul className="space-y-2">
              <li>
                <Link to="/basic-website" className="text-gray-300 hover:text-white transition-colors">
                  Basic Website
                </Link>
              </li>
              <li>
                <Link to="/full-website" className="text-gray-300 hover:text-white transition-colors">
                  Full Website
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-[#affc41]">
                  All services →
                </Link>
              </li>
            </ul>
          )}

          {renderSection(
            'contact',
            'Contact',
            <ul className="space-y-2 text-gray-300">
              <li>{brand.address}</li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">
                  {brand.email}
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {brand.year} {brand.name}. All rights reserved.
          </p>
          <p>{brand.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
