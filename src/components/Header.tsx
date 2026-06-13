import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { products } from '../content/siteContent';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-[#086375] font-semibold' : 'text-body hover:text-primary'
  }`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header>
        <motion.div
          className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-4"
          initial={prefersReducedMotion ? false : { y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
        <nav className="container mx-auto px-4" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center pl-4" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Appdoers Logo" className="h-12 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === '/'}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden relative z-[60] p-2 -mr-2 text-body hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
        </motion.div>
      </header>

      {/* Render only when open — avoids off-screen panel blocking taps on mobile */}
      {isMenuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-[72px] bg-black/20 z-40"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id="mobile-navigation"
            className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 shadow-xl overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-8" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `text-xl font-medium transition-colors duration-300 ${
                        isActive ? 'text-[#086375]' : 'text-body hover:text-primary'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-4 border-t border-gray-100">
                  Our services
                </p>
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={product.href}
                    className="block text-lg text-body hover:text-primary transition-colors pl-2"
                    onClick={closeMenu}
                  >
                    {product.title}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  className="btn-primary text-center text-lg py-3"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
