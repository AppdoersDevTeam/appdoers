import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/** Re-runs scroll reveal observers on each route change. Must live inside Router. */
const ScrollAnimationProvider: React.FC = () => {
  useScrollAnimation();
  return null;
};

export default ScrollAnimationProvider;
