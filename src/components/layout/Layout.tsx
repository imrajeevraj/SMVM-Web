import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.dataset.qaViewport = `${window.innerWidth}/${document.documentElement.scrollWidth}`;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="fixed left-4 top-3 z-[120] -translate-y-20 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#06152f] shadow-xl transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
