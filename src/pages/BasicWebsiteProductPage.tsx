import React from 'react';
import ProductDetailPage from '../components/ProductDetailPage';
import { getProductBySlug } from '../content/siteContent';
import { Navigate } from 'react-router-dom';

const BasicWebsiteProductPage: React.FC = () => {
  const product = getProductBySlug('basic-website');
  if (!product) return <Navigate to="/services" replace />;
  return <ProductDetailPage product={product} />;
};

export default BasicWebsiteProductPage;
