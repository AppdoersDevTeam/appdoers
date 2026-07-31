import React, { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type PortfolioPreviewProps = {
  title: string;
  externalUrl: string;
  compact?: boolean;
  embeddable?: boolean;
  previewImage?: string;
};

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 900;

function screenshotPreviewUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280`;
}

const PreviewChrome: React.FC<{
  host: string;
  externalUrl: string;
  linkLabel?: string;
  children: React.ReactNode;
}> = ({ host, externalUrl, linkLabel = 'Open in new tab', children }) => (
  <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white border-b border-gray-100">
      <p className="text-sm font-semibold text-[#3c1642]">{host}</p>
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#086375] hover:text-[#1dd3b0]"
      >
        {linkLabel}
        <FaExternalLinkAlt />
      </a>
    </div>
    {children}
  </div>
);

const ScreenshotPreview: React.FC<{
  title: string;
  externalUrl: string;
  host: string;
  compact?: boolean;
  previewImage?: string;
}> = ({ title, externalUrl, host, compact = false, previewImage }) => {
  const [screenshotFailed, setScreenshotFailed] = useState(false);
  const frameClass = compact ? 'aspect-[16/10] min-h-[200px]' : 'aspect-[16/10] min-h-[280px]';
  const imageSrc = previewImage || screenshotPreviewUrl(externalUrl);

  if (screenshotFailed) {
    return (
      <PreviewChrome host={host} externalUrl={externalUrl} linkLabel="Open live site">
        <div
          className={`flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0] text-white px-6 ${frameClass}`}
        >
          <p className="text-lg font-bold mb-2">{title}</p>
          <p className="text-white/85 text-sm max-w-md mb-5">
            This site cannot be embedded live (host security). Open it in a new tab to explore the
            build.
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
      </PreviewChrome>
    );
  }

  return (
    <PreviewChrome host={host} externalUrl={externalUrl} linkLabel="Open live site">
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block w-full overflow-hidden bg-gray-100 ${frameClass}`}
      >
        <img
          src={imageSrc}
          alt={`${title} website preview`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={() => setScreenshotFailed(true)}
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3c1642]/80 to-transparent px-4 py-3 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Tap to open live site
        </span>
      </a>
    </PreviewChrome>
  );
};

const LiveIframePreview: React.FC<{
  title: string;
  externalUrl: string;
  host: string;
}> = ({ title, externalUrl, host }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth;
      if (width > 0) {
        setScale(width / IFRAME_WIDTH);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const frameHeight = Math.round(IFRAME_HEIGHT * scale);

  return (
    <PreviewChrome host={host} externalUrl={externalUrl}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-white"
        style={{ height: frameHeight }}
      >
        <iframe
          title={`${title} live site`}
          src={externalUrl}
          className="absolute top-0 left-0 border-0"
          style={{
            width: IFRAME_WIDTH,
            height: IFRAME_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PreviewChrome>
  );
};

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  title,
  externalUrl,
  compact = false,
  embeddable = true,
  previewImage,
}) => {
  const host = externalUrl.replace(/^https?:\/\//, '');

  if (!embeddable) {
    return (
      <ScreenshotPreview
        title={title}
        externalUrl={externalUrl}
        host={host}
        compact={compact}
        previewImage={previewImage}
      />
    );
  }

  return <LiveIframePreview title={title} externalUrl={externalUrl} host={host} />;
};

export default PortfolioPreview;
