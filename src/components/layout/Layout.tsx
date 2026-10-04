import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chatbot } from '../chat/Chatbot';
import { useSiteInteractions } from '@/lib/useSiteInteractions';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  useSiteInteractions(location.pathname);

  useEffect(() => {
    if (location.hash) {
      let anchor = location.hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch { /* Keep malformed external hashes harmless. */ }
      const frame = window.requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      }));
      return () => window.cancelAnimationFrame(frame);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="smvm-site flex min-h-screen flex-col">
      <a href="#main-content" className="fixed left-4 top-3 z-[120] -translate-y-20 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#06152f] shadow-xl transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
        <div className="site-route" key={location.pathname}>{children}</div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
