import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { founders, foundersIntro } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

type FoundersSectionProps = {
  variant?: 'compact' | 'full';
};

const FoundersSection: React.FC<FoundersSectionProps> = ({ variant = 'full' }) => {
  const compact = variant === 'compact';

  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-[#1dd3b0] font-semibold uppercase tracking-wider mb-2">
            {foundersIntro.eyebrow}
          </p>
          <h2 className="section-title mb-4">
            {compact ? 'Meet Fabiano & Sara' : foundersIntro.title}
          </h2>
          <p className={`text-gray-700 leading-relaxed ${compact ? 'text-gray-600' : 'mb-4'}`}>
            {foundersIntro.lead}
          </p>
          {!compact && (
            <p className="text-gray-600 text-sm leading-relaxed">{foundersIntro.partnership}</p>
          )}
        </MotionReveal>

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <StaggerItem key={founder.id}>
              <article
                className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-[#b2ff9e]/50 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  compact ? 'p-6' : 'p-8'
                }`}
              >
                <div className={`flex gap-5 ${compact ? 'items-start mb-4' : 'flex-col mb-4'}`}>
                  <div
                    className={`overflow-hidden rounded-xl border-2 border-[#b2ff9e]/60 bg-gray-50 shrink-0 ${
                      compact ? 'w-28 h-28' : 'w-full max-w-xs mx-auto aspect-square'
                    }`}
                  >
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className={compact ? 'min-w-0' : ''}>
                    <span className="inline-block bg-[#086375] text-white text-xs font-bold px-3 py-1 rounded mb-3 w-fit">
                      {founder.badge}
                    </span>
                    <h3 className={`font-bold text-[#3c1642] mb-1 ${compact ? 'text-xl' : 'text-2xl'}`}>
                      {founder.name}
                    </h3>
                    <p className="text-[#1dd3b0] font-medium mb-2 text-sm">{founder.role}</p>
                    <p className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                      <FaMapMarkerAlt className="text-[#086375]" aria-hidden />
                      {founder.location}
                    </p>
                  </div>
                </div>

                <p className={`text-gray-700 leading-relaxed ${compact ? 'text-sm mb-4' : 'mb-3'}`}>
                  {founder.bio}
                </p>

                {!compact && (
                  <>
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
                  </>
                )}

                {compact && (
                  <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
                    {founder.focus.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#1dd3b0] shrink-0" aria-hidden>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {compact && (
          <MotionReveal className="text-center mt-8" delay={0.15}>
            <Link
              to="/about"
              className="inline-block bg-[#086375] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#3c1642] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              About us: full story
            </Link>
          </MotionReveal>
        )}
      </div>
    </section>
  );
};

export default FoundersSection;
