import React from 'react';

type AudienceTagsProps = {
  tags: readonly string[];
  className?: string;
  /** Highlight churches tag for visual emphasis */
  emphasizeChurches?: boolean;
};

const AudienceTags: React.FC<AudienceTagsProps> = ({
  tags,
  className = '',
  emphasizeChurches = false,
}) => (
  <ul className={`flex flex-wrap justify-center gap-2 ${className}`}>
    {tags.map((tag) => {
      const isChurch = emphasizeChurches && tag.toLowerCase().includes('church');
      return (
        <li
          key={tag}
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${
            isChurch
              ? 'bg-[#affc41]/30 border-[#affc41] text-[#3c1642]'
              : 'bg-gray-50 border-gray-200 text-gray-600'
          }`}
        >
          {tag}
        </li>
      );
    })}
  </ul>
);

export default AudienceTags;
