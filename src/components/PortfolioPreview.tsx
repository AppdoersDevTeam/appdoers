import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type PortfolioPreviewProps = {
  title: string;
  externalUrl: string;
  compact?: boolean;
  embeddable?: boolean;
};

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 900;
const COMPACT_SCALE = 0.32;
const FULL_SCALE = 0.72;

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  title,
  externalUrl,
  compact = false,
  embeddable = true,
}) => {
  const host = externalUrl.replace(/^https?:\/\//, '');
  const scale = compact ? COMPACT_SCALE : FULL_SCALE;
  const frameHeight = Math.round(IFRAME_HEIGHT * scale);

  if (!embeddable) {
    return (
      <div className="rounded-xl border border-gray-200 overflow-hidden bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0]">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white/95 border-b border-gray-100">
          <p className="text-sm font-semibold text-[#3c1642]">{host}</p>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#086375] hover:text-[#1dd3b0]"
          >
            Open live site
            <FaExternalLinkAlt />
          </a>
        </div>
        <div
          className={`flex flex-col items-center justify-center text-center text-white px-6 ${
            compact ? 'min-h-[200px] py-10' : 'min-h-[280px] py-14'
          }`}
        >
          <p className="text-lg font-bold mb-2">{title}</p>
          <p className="text-white/85 text-sm max-w-md mb-5">
            This site cannot be embedded here (host security). Open it in a new tab to explore the
            live build.
          </p>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#affc41] text-[#3c1642] font-semibold px-5 py-2.5 rounded-lg hover:bg-white transition-colors"
          >
            Visit {host}
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white border-b border-gray-100">
        <p className="text-sm font-semibold text-[#3c1642]">{host}</p>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#086375] hover:text-[#1dd3b0]"
        >
          Open in new tab
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="w-full overflow-hidden bg-white" style={{ height: frameHeight }}>
        <iframe
          title={`${title} live site`}
          src={externalUrl}
          width={IFRAME_WIDTH}
          height={IFRAME_HEIGHT}
          className="border-0 origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: IFRAME_WIDTH,
            height: IFRAME_HEIGHT,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default PortfolioPreview;
