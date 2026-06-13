/** Route labels for breadcrumbs and structured data */
export const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/services': 'Services',
  '/pricing': 'Pricing',
  '/about': 'About',
  '/contact': 'Contact',
  '/basic-website': 'Basic Website',
  '/full-website': 'Full Website',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getBreadcrumbs(path: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];
  if (path === '/' || !path) return crumbs;

  const label = routeLabels[path];
  if (label) {
    crumbs.push({ name: label, path });
  }
  return crumbs;
}

export function breadcrumbListSchema(crumbs: BreadcrumbItem[], siteUrl: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  };
}
