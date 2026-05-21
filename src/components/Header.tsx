import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { v1Products } from '../content/siteContent';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center pl-4">
            <img src="/images/logo.png" alt="Appdoers Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-body hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </div>

          <button
            className="lg:hidden text-body hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 transform transition-transform duration-300 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xl font-medium text-body hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-4 border-t border-gray-100">
                Our services
              </p>
              {v1Products.map((product) => (
                <Link
                  key={product.slug}
                  to={product.href}
                  className="block text-lg text-body hover:text-primary transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {product.title}
                </Link>
              ))}

              <Link
                to="/contact"
                className="btn-primary text-center text-lg py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
