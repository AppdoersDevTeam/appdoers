import React from 'react';
import { audienceSegments, type AudienceId } from '../content/audienceContent';
import { useAudienceSegment } from '../context/AudienceSegmentContext';

type AudienceSwitcherProps = {
  className?: string;
  /** Compact layout for narrow sections */
  size?: 'default' | 'compact';
};

const AudienceSwitcher: React.FC<AudienceSwitcherProps> = ({
  className = '',
  size = 'default',
}) => {
  const { audienceId, setAudienceId } = useAudienceSegment();

  return (
    <div className={className}>
      <p
        className={`font-semibold text-gray-500 uppercase tracking-wide text-center mb-2 ${
          size === 'compact' ? 'text-[10px]' : 'text-xs'
        }`}
      >
        I am a…
      </p>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Choose your organisation type"
      >
        {audienceSegments.map((segment) => {
          const selected = audienceId === segment.id;
          return (
            <button
              key={segment.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setAudienceId(segment.id as AudienceId)}
              className={`rounded-full font-semibold transition-colors border-2 ${
                size === 'compact' ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'
              } ${
                selected
                  ? 'bg-[#086375] border-[#086375] text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#1dd3b0] hover:text-[#086375]'
              }`}
            >
              {segment.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AudienceSwitcher;
