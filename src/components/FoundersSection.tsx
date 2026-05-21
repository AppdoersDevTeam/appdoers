import React from 'react';
import { founders } from '../content/siteContent';

const FoundersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#1dd3b0] font-semibold uppercase tracking-wider mb-2">
            The Minds Behind
          </p>
          <h2 className="section-title">About The Founders</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <article
              key={founder.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-[#b2ff9e]/50"
            >
              <span className="inline-block bg-[#086375] text-white text-xs font-bold px-3 py-1 rounded mb-4">
                {founder.badge}
              </span>
              <h3 className="text-2xl font-bold text-[#3c1642] mb-1">{founder.name}</h3>
              <p className="text-[#1dd3b0] font-medium mb-4">{founder.role}</p>
              <p className="text-gray-600 mb-6">{founder.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-[#affc41]/30 text-[#3c1642] px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <blockquote className="border-l-4 border-[#1dd3b0] pl-4 italic text-gray-700">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
