import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';

/**
 * Tracks page views on each React Router navigation (SPA).
 * Must live inside <Router>.
 */
const VercelAnalytics: React.FC = () => {
  const location = useLocation();

  return (
    <Analytics
      framework="react-router"
      route={location.pathname}
      path={location.pathname}
    />
  );
};

export default VercelAnalytics;
