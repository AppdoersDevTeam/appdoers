import React from 'react';
import { FaShoppingCart, FaUsers, FaChartBar, FaLock, FaRocket, FaHeadset } from 'react-icons/fa';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const OnlineStrategy: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-[#1dd3b0]" />,
      title: 'Fast on every device',
      description: 'Your site loads quickly on phones and computers so visitors do not give up waiting.',
    },
    {
      icon: <FaShoppingCart className="text-4xl text-[#1dd3b0]" />,
      title: 'Online shops & payments',
      description: 'Sell products or accept donations online with checkout flows that are easy to follow.',
    },
    {
      icon: <FaUsers className="text-4xl text-[#1dd3b0]" />,
      title: 'Member logins',
      description: 'Private areas for your team or members: events, resources, and messages in one place.',
    },
    {
      icon: <FaChartBar className="text-4xl text-[#1dd3b0]" />,
      title: 'Clear reporting',
      description: 'We help you understand how your site is performing so you know what is working.',
    },
    {
      icon: <FaLock className="text-4xl text-[#1dd3b0]" />,
      title: 'Safe content updates',
      description: 'Update your own text and photos where included, without breaking the design.',
    },
    {
      icon: <FaHeadset className="text-4xl text-[#1dd3b0]" />,
      title: 'We look after hosting',
      description: 'Hosting, security, and updates are handled by us. Your site just works.',
    },
  ];

  return (
    <section className="py-20 bg-[#b2ff9e]/10">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-16">
          <h2 className="section-title">What you get with us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical features for every kind of client.
          </p>
        </MotionReveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#086375] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default OnlineStrategy;
