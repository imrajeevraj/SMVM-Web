import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { productSearchItems, services } from '@/data/site';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Vision', path: '/vision' },
  { name: 'Contact Us', path: '/contact' },
];

const searchItems = [
  ...productSearchItems,
  ...services.map((service) => ({ label: service.title, description: 'SMVM technology service', href: `/services/${service.slug}`, icon: service.icon })),
  { label: 'About SMVM Softwares', description: 'Learn about the company', href: '/about', icon: productSearchItems[0].icon },
  { label: 'Our Vision', description: 'Our direction and technology philosophy', href: '/vision', icon: productSearchItems[0].icon },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const overHero = location.pathname === '/' && !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const saved = localStorage.getItem('smvm-theme');
    const shouldUseDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setSearchOpen(true);
      }
      if (event.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 50);

    const keepFocusInDialog = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !searchDialogRef.current) return;
      const focusable = Array.from(searchDialogRef.current.querySelectorAll<HTMLElement>('button, input, a[href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', keepFocusInDialog);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', keepFocusInDialog);
      searchButtonRef.current?.focus();
    };
  }, [searchOpen]);

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? searchItems.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(term)) : searchItems.slice(0, 7);
  }, [query]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('smvm-theme', next ? 'dark' : 'light');
  };

  const chooseSearchItem = (href: string) => {
    setSearchOpen(false); setQuery(''); navigate(href);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', overHero ? 'py-4 text-white' : 'border-b border-border/70 bg-surface/90 py-2.5 text-text shadow-[0_8px_30px_rgba(4,15,34,.06)] backdrop-blur-xl')}>
        <div className="site-container flex h-14 items-center justify-between gap-5">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label="SMVM Softwares home">
            <img src="/images/brand/smvm-mark-3d-smooth.png" alt="" className="h-10 w-10 object-contain" />
            <span className="leading-none"><strong className="block text-[15px] font-extrabold tracking-[0.08em]">SMVM</strong><small className={cn('mt-1 block text-[9px] font-bold uppercase tracking-[0.24em]', overHero ? 'text-slate-300' : 'text-text-muted')}>Softwares</small></span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = link.path === '/'
                ? location.pathname === '/' && !location.hash
                : link.path.startsWith('/#')
                  ? location.pathname === '/' && location.hash === link.path.slice(1)
                  : location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
              return <Link aria-current={active ? 'page' : undefined} key={link.name} to={link.path} className={cn('rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand', active ? (overHero ? 'bg-white/10 text-white' : 'bg-brand/10 text-brand') : (overHero ? 'text-slate-200 hover:bg-white/10 hover:text-white' : 'text-text-muted hover:bg-background hover:text-text'))}>{link.name}</Link>;
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button ref={searchButtonRef} type="button" onClick={() => setSearchOpen(true)} className={cn('grid h-10 w-10 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand', overHero ? 'text-slate-200 hover:bg-white/10' : 'text-text-muted hover:bg-background hover:text-text')} aria-label="Search site" aria-haspopup="dialog"><Search className="h-[18px] w-[18px]" /></button>
            <button type="button" onClick={toggleTheme} className={cn('grid h-10 w-10 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand', overHero ? 'text-slate-200 hover:bg-white/10' : 'text-text-muted hover:bg-background hover:text-text')} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} aria-pressed={isDark}>{isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}</button>
            <Link to="/contact" className="button-primary ml-2 hidden h-10 px-5 text-xs sm:inline-flex">Get in Touch <ArrowRight className="h-4 w-4" /></Link>
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className={cn('ml-1 grid h-10 w-10 place-items-center rounded-full lg:hidden', overHero ? 'text-white hover:bg-white/10' : 'text-text hover:bg-background')} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>{mobileMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="absolute inset-x-0 top-full max-h-[calc(100vh-74px)] overflow-y-auto border-b border-border bg-surface text-text shadow-2xl lg:hidden" aria-label="Mobile navigation">
              <div className="site-container flex flex-col gap-1 py-5">
                {navLinks.map((link) => <Link key={link.name} to={link.path} className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-background hover:text-brand">{link.name}</Link>)}
                <Link to="/contact" className="button-primary mt-3">Get in Touch <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div ref={searchDialogRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-start justify-center bg-[#020817]/70 px-4 pt-[12vh] backdrop-blur-lg" role="dialog" aria-modal="true" aria-labelledby="search-title" onMouseDown={(event) => event.currentTarget === event.target && closeSearch()}>
            <motion.div initial={{ opacity: 0, y: -16, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }} className="w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
              <h2 id="search-title" className="sr-only">Search SMVM Softwares</h2>
              <div className="flex items-center gap-3 border-b border-border px-5"><Search className="h-5 w-5 text-text-muted" /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} className="h-16 flex-1 bg-transparent text-text outline-none placeholder:text-text-muted" placeholder="Search products and services…" aria-label="Search products and services" /><button type="button" onClick={closeSearch} className="rounded-lg p-2 text-text-muted hover:bg-background" aria-label="Close search"><X className="h-5 w-5" /></button></div>
              <div className="max-h-[55vh] overflow-y-auto p-3">
                {filteredItems.length ? filteredItems.map((item) => { const Icon = item.icon; return <button key={`${item.label}-${item.href}`} onClick={() => chooseSearchItem(item.href)} className="flex w-full items-center gap-4 rounded-2xl p-3 text-left hover:bg-background focus-visible:bg-background focus-visible:outline-none"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></span><span><strong className="block text-sm text-text">{item.label}</strong><small className="mt-1 block text-text-muted">{item.description}</small></span></button>; }) : <p className="p-8 text-center text-sm text-text-muted">No matching pages found.</p>}
              </div>
              <div className="border-t border-border px-5 py-3 text-[11px] text-text-muted">Tip: press Ctrl/⌘ + K to open search.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
