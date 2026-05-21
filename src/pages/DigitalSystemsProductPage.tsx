import React from 'react';
import ProductDetailPage from '../components/ProductDetailPage';
import { getProductBySlug } from '../content/siteContent';
import { Navigate } from 'react-router-dom';

const DigitalSystemsProductPage: React.FC = () => {
  const product = getProductBySlug('digital-systems');
  if (!product) return <Navigate to="/services" replace />;
  return <ProductDetailPage product={product} />;
};

export default DigitalSystemsProductPage;
