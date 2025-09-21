type Breadcrumb = {
  label: string;
  href?: string;
};

/**
 * A configuration object that maps URL pathnames to their corresponding breadcrumb trails.
 * Used by the BreadcrumbNav component to dynamically render breadcrumbs.
 */
export const breadcrumbConfig: Record<string, Breadcrumb[]> = {
  '/analytics': [
    { label: 'Dashboard', href: '/under-development' },
    { label: 'E Commerce' },
    { label: 'Analytics' },
  ],
  '/orders': [
    { label: 'Dashboard', href: '/under-development' },
    { label: 'E Commerce' },
    { label: 'Orders' },
  ],
};
