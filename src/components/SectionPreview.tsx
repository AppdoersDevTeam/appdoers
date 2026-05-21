import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

type SectionPreviewProps = {
  title: string;
  description: string;
  to: string;
  linkLabel?: string;
};

const SectionPreview: React.FC<SectionPreviewProps> = ({
  title,
  description,
  to,
  linkLabel = 'View full page',
}) => {
  return (
    <div className="text-center mt-10">
      <p className="text-gray-600 max-w-xl mx-auto mb-4">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-[#086375] font-semibold hover:text-[#1dd3b0] transition-colors"
      >
        {linkLabel}
        <FaArrowRight className="text-sm" />
      </Link>
    </div>
  );
};

export default SectionPreview;
