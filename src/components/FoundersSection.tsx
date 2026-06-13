import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { founders, foundersIntro } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const FoundersSection: React.FC = () => {
  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-[#1dd3b0] font-semibold uppercase tracking-wider mb-2">
            {foundersIntro.eyebrow}
          </p>
          <h2 className="section-title mb-4">{foundersIntro.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{foundersIntro.lead}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{foundersIntro.partnership}</p>
        </MotionReveal>

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <StaggerItem key={founder.id}>
              <article className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-[#b2ff9e]/50 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <span className="inline-block bg-[#086375] text-white text-xs font-bold px-3 py-1 rounded mb-4 w-fit">
                  {founder.badge}
                </span>
                <h3 className="text-2xl font-bold text-[#3c1642] mb-1">{founder.name}</h3>
                <p className="text-[#1dd3b0] font-medium mb-2">{founder.role}</p>
                <p className="inline-flex items-center gap-1.5 text-xs text-gray-500 mb-5">
                  <FaMapMarkerAlt className="text-[#086375]" aria-hidden />
                  {founder.location}
                </p>

                <p className="text-gray-700 leading-relaxed mb-3">{founder.bio}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{founder.extendedBio}</p>

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#086375] mb-2">
                    At Appdoers, {founder.name.split(' ')[0]} handles
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {founder.focus.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#1dd3b0] mt-1 shrink-0" aria-hidden>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

                <blockquote className="border-l-4 border-[#1dd3b0] pl-4 italic text-gray-700 mt-auto text-sm">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default FoundersSection;
