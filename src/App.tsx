import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import VercelAnalytics from './components/VercelAnalytics';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import PricingPage from './components/PricingPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BasicWebsiteProductPage from './pages/BasicWebsiteProductPage';
import FullWebsiteProductPage from './pages/FullWebsiteProductPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import NotFoundPage from './components/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollAnimationProvider from './components/ScrollAnimationProvider';
import { AudienceSegmentProvider } from './context/AudienceSegmentContext';

const legacyProductRedirects = [
  '/apps',
  '/seo',
  '/content',
  '/social-marketing',
  '/listing-builder',
  '/business-center-pro',
  '/review-builder',
  '/ad-intelligence',
  '/ministry',
];

const App: React.FC = () => {
  return (
    <Router>
      <AudienceSegmentProvider>
      <ScrollAnimationProvider />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#086375] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/basic-website" element={<BasicWebsiteProductPage />} />
            <Route path="/full-website" element={<FullWebsiteProductPage />} />
            <Route path="/websites" element={<Navigate to="/basic-website" replace />} />
            <Route path="/digital-systems" element={<Navigate to="/full-website" replace />} />
            {legacyProductRedirects.map((path) => (
              <Route key={path} path={path} element={<Navigate to="/services" replace />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <VercelAnalytics />
      <SpeedInsights />
      </AudienceSegmentProvider>
    </Router>
  );
};

export default App;
