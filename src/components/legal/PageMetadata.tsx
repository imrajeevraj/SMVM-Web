import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { policies } from '../../data/policies';
import identity from '../../config/legal.json';

export function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const policy = policies.find(item => item.path === pathname);
    document.title = policy ? `${policy.title} | ${identity.brandName}` : pathname === '/contact' ? `Contact and Merchant Details | ${identity.brandName}` : pathname === '/checkout' ? `Purchase Information | ${identity.brandName}` : `${identity.brandName} | Where Creativity Meets Innovation`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', policy?.description ?? (pathname === '/contact' ? 'Email enquiries, support and merchant verification details for SMVM Softwares.' : 'SMVM Softwares builds POS products and custom software solutions for modern businesses.'));
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
    canonical.href = `${identity.websiteUrl}${pathname === '/cookie-policy' ? '/cookies' : pathname}`;
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.append(robots); }
    robots.content = policy || ['/checkout', '/cookie-policy'].includes(pathname) ? 'noindex, follow' : 'index, follow';
  }, [pathname]);
  return null;
}
