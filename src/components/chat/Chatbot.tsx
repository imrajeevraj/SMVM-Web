import { lazy, Suspense, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const ChatPanel = lazy(() => import('./ChatPanel').then(m => ({ default: m.ChatPanel })));

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const preloadPanel = () => {
    import('./ChatPanel');
  };

  const handleClose = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <Suspense fallback={null}>
            <ChatPanel onClose={handleClose} />
          </Suspense>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="hidden rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-bold text-[#123d9d] shadow-[0_12px_24px_rgba(9,32,63,.12)] backdrop-blur sm:block"
            >
              How can we help?
            </motion.span>
          )}
        </AnimatePresence>
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          onMouseEnter={preloadPanel}
          onFocus={preloadPanel}
          className="group relative grid h-[92px] w-[92px] place-items-center bg-transparent transition hover:-translate-y-1 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
          aria-label={open ? 'Close SMVM Assistant' : 'Open SMVM Assistant'}
          aria-expanded={open}
        >
          {open ? (
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#0b78f0] shadow-[0_11px_26px_rgba(22,119,255,.52)]">
              <X className="h-7 w-7 text-white" />
            </span>
          ) : (
            <img
              src="/images/icons/Live chatbot.svg"
              alt=""
              width={160}
              height={160}
              decoding="async"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_14px_18px_rgba(8,43,89,.28)] transition-transform group-hover:scale-105"
            />
          )}
        </button>
      </div>
    </div>
  );
}
