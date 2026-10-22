import { FormEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Headset, Info, MoreVertical, Paperclip, Send, Settings, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type ChatAction = { label: string; to: string };
type ChatMessage = { id: number; role: 'assistant' | 'user'; text: string; actions?: ChatAction[] };

const firstMessage: ChatMessage = {
  id: 1,
  role: 'assistant',
  text: "Hi! 👋\n\nI'm the SMVM Assistant.\nI can help you find the right product,\nexplore our software services, or\nconnect you with our team.\n\nWhat would you like to do?",
};

const quickCards = [
  {
    label: 'Find the right POS',
    subtitle: 'Tell me about your business',
    to: '/products',
    icon: ShoppingCart,
    bg: 'bg-[#f4f8fe]',
    border: 'border-[#e4effd]',
    color: 'text-[#123d9d]',
    iconColor: 'text-[#0e5fd6]',
    iconBg: 'bg-[#e0edfe]',
  },
  {
    label: 'Explore software services',
    subtitle: 'Web, Mobile, AI/ML and more',
    to: '/services',
    icon: Settings,
    bg: 'bg-[#fbf4ff]',
    border: 'border-[#f2e4fc]',
    color: 'text-[#123d9d]',
    iconColor: 'text-[#9c27b0]',
    iconBg: 'bg-[#f4dffe]',
  },
  {
    label: 'Contact SMVM',
    subtitle: 'Talk to our team for support or enquiry',
    to: '/contact',
    icon: Headset,
    bg: 'bg-[#f4fdf6]',
    border: 'border-[#e0f8e6]',
    color: 'text-[#123d9d]',
    iconColor: 'text-[#1c8a49]',
    iconBg: 'bg-[#d2f3db]',
  },
];

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

  if (text.includes('service') || text.includes('website') || text.includes('web development') || text.includes('custom') || text.includes('mobile') || text.includes('android')) {
    return {
      text: 'SMVM provides web development, custom software, mobile and Android app development, and consulting and support.',
      actions: [{ label: 'Explore services', to: '/services' }],
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
    text: 'I can guide you through SMVM POS products, web and custom software services, mobile app development, or the contact page. Try mentioning your business type or what you want to improve.',
    actions: [{ label: 'Browse products', to: '/products' }],
  };
}

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([firstMessage]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

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

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="assistant-title"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="w-full sm:w-[410px] overflow-hidden rounded-[28px] border border-[#dbe6f4] bg-white shadow-[0_24px_60px_-12px_rgba(8,33,71,0.22)]"
    >
      <div className="relative flex flex-col h-[520px] max-h-[calc(100vh-140px)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#edf3fb] bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <img src="/images/icons/Live chatbot.svg" alt="" className="h-full w-full object-contain scale-[1.7]" />
            </div>
            <div>
              <h2 id="assistant-title" className="text-[17px] font-bold leading-tight text-[#0a2540]">SMVM Assistant</h2>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                <span className="text-[12px] font-semibold text-[#627d98]">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="grid h-9 w-9 place-items-center rounded-full text-[#627d98] transition hover:bg-[#f0f5fa]" aria-label="More options">
              <MoreVertical className="h-4 w-4" />
            </button>
            <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full text-[#627d98] transition hover:bg-[#f0f5fa]" aria-label="Close SMVM Assistant">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Message body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          <div className="flex items-center justify-center">
            <span className="rounded-full bg-[#f0f4f9] px-3 py-1 text-[11px] font-bold text-[#627d98]">TODAY</span>
          </div>

          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' ? (
                  <div className="flex w-full items-start gap-3">
                    <div className="mt-1 relative h-8 w-8 shrink-0">
                      <img src="/images/icons/Live chatbot.svg" alt="" className="h-full w-full object-contain scale-[2]" />
                    </div>
                    <div className="max-w-[88%] rounded-[20px] rounded-tl-[4px] bg-[#f4f8fe] px-4 py-3 text-[14px] font-medium leading-[1.4] text-[#0b2249]" style={{ whiteSpace: 'pre-line' }}>
                      {message.text}
                      {message.actions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.actions.map((action) => (
                            <Link key={action.to} to={action.to} onClick={onClose} className="inline-flex items-center gap-1.5 rounded-full bg-[#dfeaff] px-3 py-2 text-xs font-bold text-[#0f5fd4] transition hover:bg-[#d0e2ff]">
                              {action.label}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[85%] rounded-[20px] rounded-br-[4px] bg-[#0a52cc] px-4 py-3 text-[14px] font-medium text-white shadow-sm">
                    {message.text}
                  </div>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-3 pt-1">
                {quickCards.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link key={action.label} to={action.to} onClick={onClose} className={`group flex w-full items-center gap-3 rounded-[16px]  ${action.bg} px-3 py-3 transition hover:brightness-95`}>
                      <div className={`grid h-[48px] w-[48px] shrink-0 place-items-center rounded-[12px] ${action.iconBg} ${action.iconColor}`}>
                        <Icon className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
                      </div>

                      <div className="min-w-0 flex-1 text-left">
                        <h3 className={`text-[16px] font-bold leading-tight tracking-[-0.01em] ${action.color}`}>{action.label}</h3>
                        <p className="mt-0.5 text-[13px] font-medium leading-tight text-[#6f829e]">{action.subtitle}</p>
                      </div>

                      <ChevronRight className={`h-5 w-5 shrink-0 ${action.iconColor}`} strokeWidth={2.5} />
                    </Link>
                  );
                })}
              </div>
            )}

            <div ref={endRef} />
          </div>
        </div>

        {/* Input form */}
        <form onSubmit={submit} className="bg-white px-4 pb-4 pt-2">
          <div className="flex items-center gap-3 rounded-full border border-[#e4ecf7] bg-white px-2 py-1.5 shadow-sm">
            <button type="button" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4f7fb] text-[#6f829e]" aria-label="Add attachment">
              <Paperclip className="h-4 w-4" />
            </button>
            <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 border-none bg-transparent px-1 py-1 text-[14px] text-[#0b2249] outline-none placeholder:text-[#889bbb] focus:border-transparent focus:outline-none focus:ring-0 focus-visible:ring-0" placeholder="Ask about products or services..." aria-label="Ask SMVM Assistant" />
            <button type="submit" disabled={!input.trim()} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0a52cc] text-white shadow-md transition hover:bg-[#0842a8] disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send question">
              <Send className="mr-0.5 mt-0.5 h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-[#889bbb]">
            <Info className="h-3.5 w-3.5" />
            <span>Local guided responses. No message is sent to a support agent.</span>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
