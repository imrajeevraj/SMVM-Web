import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, RotateCcw, Send, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type ChatAction = { label: string; to: string };
type ChatMessage = { id: number; role: 'assistant' | 'user'; text: string; actions?: ChatAction[] };

const firstMessage: ChatMessage = {
  id: 1,
  role: 'assistant',
  text: 'Hi! I can help you find the right SMVM product, explore software services, or reach the contact page.',
};

const quickPrompts = ['Which POS fits my business?', 'Explore software services', 'Contact SMVM'];

function answerFor(input: string): Omit<ChatMessage, 'id' | 'role'> {
  const text = input.toLowerCase();

  if (text.includes('camstore') || text.includes('single store') || text.includes('small shop') || text.includes('small business')) {
    return {
      text: 'CamStore POS is designed for focused retail operations and small shops that need clear billing, inventory, customer, and reporting workflows.',
      actions: [{ label: 'View CamStore POS', to: '/products/camstore-pos' }],
    };
  }

  if (text.includes('cambill') || text.includes('large store') || text.includes('enterprise') || text.includes('multi-store')) {
    return {
      text: 'CamBill POS is the stronger fit for large or multi-store retail operations that need deeper reporting and structured user access.',
      actions: [{ label: 'View CamBill POS', to: '/products/cambill-pos' }],
    };
  }

  if (text.includes('medical') || text.includes('medicine') || text.includes('pharmacy') || text.includes('medibill')) {
    return {
      text: 'MediBill POS supports focused medical stores, while MediBill Pro is intended for larger, multi-branch pharmacy operations.',
      actions: [
        { label: 'MediBill POS', to: '/products/medibill-pos' },
        { label: 'MediBill Pro', to: '/products/medibill-pro' },
      ],
    };
  }

  if (text.includes('service') || text.includes('website') || text.includes('web development') || text.includes('custom') || text.includes('automation')) {
    return {
      text: 'SMVM provides web development, custom software, business automation, UI/UX design, and consulting and support.',
      actions: [{ label: 'Explore services', to: '/#services' }],
    };
  }

  if (text.includes('contact') || text.includes('support') || text.includes('human') || text.includes('enquiry')) {
    return {
      text: 'You can prepare an enquiry on the contact page. The form clearly explains how your message is handled.',
      actions: [{ label: 'Open contact page', to: '/contact' }],
    };
  }

  if (text.includes('which') || text.includes('recommend') || text.includes('right pos') || text.includes('fits')) {
    return {
      text: 'For a small retail shop, start with CamStore POS. For a large or multi-store business, consider CamBill POS. Medical stores can choose between MediBill POS and MediBill Pro based on scale.',
      actions: [{ label: 'Compare all products', to: '/products' }],
    };
  }

  return {
    text: 'I can guide you through SMVM POS products, web and custom software services, business automation, or the contact page. Try mentioning your business type or what you want to improve.',
    actions: [{ label: 'Browse products', to: '/products' }],
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([firstMessage]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    if (!open) return;
    window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, open]);

  const ask = (value: string) => {
    const clean = value.trim();
    if (!clean) return;
    const response = answerFor(clean);
    setMessages((current) => [
      ...current,
      { id: nextId.current++, role: 'user', text: clean },
      { id: nextId.current++, role: 'assistant', ...response },
    ]);
    setInput('');
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  const reset = () => {
    setMessages([{ ...firstMessage, id: nextId.current++ }]);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby="smvm-chat-title"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-3 flex h-[min(590px,calc(100vh-116px))] w-[min(390px,calc(100vw-24px))] flex-col overflow-hidden rounded-[26px] border border-white/15 bg-surface shadow-[0_28px_80px_rgba(3,15,36,.3)]"
          >
            <div className="relative overflow-hidden bg-[#061a3a] px-5 pb-5 pt-4 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(69,148,255,.4),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(32,217,255,.18),transparent_35%)]" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <img src="/images/icons/Live chatbot.svg" alt="" className="h-12 w-12 object-contain" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[.15em] text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Website guide</p>
                  <h2 id="smvm-chat-title" className="mt-1 text-lg font-extrabold">SMVM Assistant</h2>
                  <p className="mt-0.5 text-xs text-slate-300">Product and service guidance</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label="Close SMVM Assistant">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-background px-4 py-4" aria-live="polite">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'rounded-br-md bg-brand text-white' : 'rounded-bl-md border border-border bg-surface text-text shadow-sm'}`}>
                      <p>{message.text}</p>
                      {message.actions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.actions.map((action) => (
                            <Link key={action.to} to={action.to} onClick={() => setOpen(false)} className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-2 text-xs font-extrabold text-brand transition hover:bg-brand hover:text-white">
                              {action.label}<ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {quickPrompts.map((prompt) => <button key={prompt} type="button" onClick={() => ask(prompt)} className="rounded-full border border-brand/20 bg-brand/5 px-3 py-2 text-xs font-bold text-brand transition hover:border-brand/40 hover:bg-brand/10">{prompt}</button>)}
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <form onSubmit={submit} className="border-t border-border bg-surface p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background p-1.5 focus-within:border-brand/50 focus-within:ring-2 focus-within:ring-brand/10">
                <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-text outline-none placeholder:text-text-muted" placeholder="Ask about products or services…" aria-label="Ask SMVM Assistant" />
                <button type="submit" disabled={!input.trim()} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send question"><Send className="h-4 w-4" /></button>
              </div>
              <div className="mt-2 flex items-center justify-between px-1">
                <p className="text-[10px] leading-4 text-text-muted">Instant website guidance—no message is sent to a person.</p>
                {messages.length > 1 && <button type="button" onClick={reset} className="inline-flex items-center gap-1 text-[10px] font-bold text-brand"><RotateCcw className="h-3 w-3" /> Reset</button>}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-3">
        <AnimatePresence>
          {!open && <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} className="hidden rounded-full border border-border bg-surface/95 px-4 py-2 text-xs font-bold text-text shadow-lg backdrop-blur sm:block">How can we help?</motion.span>}
        </AnimatePresence>
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group relative grid h-[92px] w-[92px] place-items-center bg-transparent transition hover:-translate-y-1 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
          aria-label={open ? 'Close SMVM Assistant' : 'Open SMVM Assistant'}
          aria-expanded={open}
        >
          {open ? (
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/95 shadow-[0_14px_32px_rgba(22,119,255,.32)]">
              <X className="h-7 w-7 text-white" />
            </span>
          ) : (
            <img
              src="/images/icons/Live chatbot.svg"
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_14px_18px_rgba(8,43,89,.28)] transition-transform group-hover:scale-105"
            />
          )}
        </button>
      </div>
    </div>
  );
}
