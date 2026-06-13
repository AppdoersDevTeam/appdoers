import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const testimonials = [
  {
    name: 'Patricia da Silva',
    role: 'Journey of Insights',
    text: 'Appdoers brought our podcast, shop, and donations into one website. They kept us updated at every step and we always knew what was happening.',
    rating: 5,
  },
  {
    name: 'Gail Boswell',
    role: 'NZ Modern School of Music',
    text: 'We needed a site that felt warm and trustworthy for families across New Zealand. The team made the process straightforward and the result speaks for itself.',
    rating: 5,
  },
  {
    name: 'Local client',
    role: 'Ashburton, NZ',
    text: 'Clear pricing, and we could always reach Fabiano directly. Exactly what we needed.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#f0fdf4] mt-32">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-16">
          <h2 className="section-title text-[#086375]">What our clients say</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Feedback from people we have built websites for.
          </p>
        </MotionReveal>

        <Stagger className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="relative">
                  <FaQuoteLeft className="text-[#1dd3b0] text-4xl absolute -top-4 left-0 opacity-20" />
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-600 mb-6 relative z-10">{testimonial.text}</p>
                  <div>
                    <h4 className="font-bold text-[#3c1642]">{testimonial.name}</h4>
                    <p className="text-[#086375] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Testimonials;
