import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import PricingPage from './components/PricingPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import WebsitesProductPage from './pages/WebsitesProductPage';
import DigitalSystemsProductPage from './pages/DigitalSystemsProductPage';
import MinistryProductPage from './pages/MinistryProductPage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import ScrollToTop from './components/ScrollToTop';

const legacyProductRedirects = [
  '/apps',
  '/seo',
  '/content',
  '/social-marketing',
  '/listing-builder',
  '/business-center-pro',
  '/review-builder',
  '/ad-intelligence',
];

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/websites" element={<WebsitesProductPage />} />
            <Route path="/digital-systems" element={<DigitalSystemsProductPage />} />
            <Route path="/ministry" element={<MinistryProductPage />} />
            {legacyProductRedirects.map((path) => (
              <Route key={path} path={path} element={<Navigate to="/services" replace />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
