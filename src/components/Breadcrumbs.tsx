import React from 'react';
import { Link } from 'react-router-dom';
import { getBreadcrumbs, type BreadcrumbItem } from '../config/pageSeo';

type BreadcrumbsProps = {
  path: string;
  className?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, className = '' }) => {
  const crumbs = getBreadcrumbs(path);
  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-white/40" aria-hidden>/</span>
              )}
              {isLast ? (
                <span className="text-white font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-[#affc41] transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export type { BreadcrumbItem };
export default Breadcrumbs;
