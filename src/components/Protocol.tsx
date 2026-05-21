import React from 'react';
import { protocol } from '../content/siteContent';

const Protocol: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-[#3c1642]/5 via-[#086375]/5 to-[#1dd3b0]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">The Protocol</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our battle-tested formula for digital dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {protocol.map((step) => (
            <div key={step.step} className="bg-white rounded-xl shadow-lg p-8 reveal">
              <div className="text-[#1dd3b0] font-bold text-lg mb-2">/{step.step}</div>
              <h3 className="text-2xl font-bold text-[#086375] mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
