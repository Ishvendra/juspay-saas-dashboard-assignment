type Breadcrumb = {
  label: string;
  href?: string;
};

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
