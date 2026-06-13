import React from 'react';
import { protocol } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const Protocol: React.FC = () => {
  return (
    <section id="services" className="section-py bg-gradient-to-r from-[#3c1642]/5 via-[#086375]/5 to-[#1dd3b0]/5">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center section-head">
          <h2 className="section-title">How we work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, clear process from first call to launch and beyond.
          </p>
        </MotionReveal>

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {protocol.map((step) => (
            <StaggerItem key={step.step}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-[#1dd3b0]/30">
                <div className="text-[#1dd3b0] font-bold text-lg mb-2">Step {step.step}</div>
                <h3 className="text-2xl font-bold text-[#086375] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Protocol;
