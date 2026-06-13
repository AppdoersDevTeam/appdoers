import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { MotionReveal } from './AnimateIn';

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
    <MotionReveal className="text-center mt-10" variant="fadeInUp">
      {title ? <h3 className="text-lg font-bold text-[#086375] mb-2">{title}</h3> : null}
      <p className="text-gray-600 max-w-xl mx-auto mb-4">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-[#086375] font-semibold hover:text-[#1dd3b0] transition-colors group"
      >
        {linkLabel}
        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </MotionReveal>
  );
};

export default SectionPreview;
