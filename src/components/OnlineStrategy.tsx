import React from 'react';
import { FaServer, FaShoppingCart, FaUsers, FaChartBar, FaLock, FaRocket } from 'react-icons/fa';

const OnlineStrategy: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-[#1dd3b0]" />,
      title: 'Sub-Second Performance',
      description: 'Static and edge-optimized architectures tuned for Core Web Vitals and conversion.',
    },
    {
      icon: <FaShoppingCart className="text-4xl text-[#1dd3b0]" />,
      title: 'Store Integration',
      description: 'Stripe and Shopify flows with inventory, checkout, and fulfillment built in.',
    },
    {
      icon: <FaUsers className="text-4xl text-[#1dd3b0]" />,
      title: 'User Management',
      description: 'Secure login, signup, and role-based dashboards on Scale-tier partnerships.',
    },
    {
      icon: <FaChartBar className="text-4xl text-[#1dd3b0]" />,
      title: 'Analytics & Reporting',
      description: 'Monthly performance reviews and growth insights on Growth and Scale tiers.',
    },
    {
      icon: <FaLock className="text-4xl text-[#1dd3b0]" />,
      title: 'Safety Lock CMS',
      description: 'Content control without breaking layouts—code-locked templates for peace of mind.',
    },
    {
      icon: <FaServer className="text-4xl text-[#1dd3b0]" />,
      title: 'Managed Infrastructure',
      description: 'We manage code, hosting, and deployments—100% passive tech on Launch and above.',
    },
  ];

  return (
    <section className="py-20 bg-[#b2ff9e]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Platform Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything included across our Launch, Growth, and Scale partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#086375] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineStrategy;
