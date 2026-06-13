import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        aria-hidden
      />
    ));

  return (
    <section className="section-py bg-[#f0fdf4]" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-8">
          <h2 id="testimonials-heading" className="section-title text-[#086375]">
            What our clients say
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Feedback from the organisations we have built websites for.
          </p>
        </MotionReveal>

        <Stagger className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="relative">
                  <FaQuoteLeft
                    className="text-[#1dd3b0] text-4xl absolute -top-4 left-0 opacity-20"
                    aria-hidden
                  />
                  <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-6 relative z-10">{testimonial.text}</p>
                  <div>
                    <h3 className="font-bold text-[#3c1642]">{testimonial.name}</h3>
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
