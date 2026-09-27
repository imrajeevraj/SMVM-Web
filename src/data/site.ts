import {
  BarChart3,
  Blocks,
  Building2,
  Code2,
  Headphones,
  HeartPulse,
  LayoutTemplate,
  Palette,
  RefreshCw,
  Scaling,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  Workflow,
} from 'lucide-react';

export const products = [
  {
    slug: 'camstore-pos',
    name: 'CamStore POS',
    audience: 'For single stores and small shops',
    description: 'A focused POS workspace that keeps billing, inventory, customers, and reports easy to manage.',
    features: ['Inventory', 'Billing', 'Customers'],
    tag: 'Small business',
    icon: Store,
    tone: 'blue',
    image: '/images/products/camstore-pos-card.png',
  },
  {
    slug: 'cambill-pos',
    name: 'CamBill POS',
    audience: 'For large stores and enterprises',
    description: 'An advanced retail platform for multi-store operations, deeper reporting, and structured user access.',
    features: ['Multi-store', 'Analytics', 'User roles'],
    tag: 'Multi-store',
    icon: Building2,
    tone: 'violet',
    image: '/images/products/cambill-pos-card.png',
  },
  {
    slug: 'medibill-pos',
    name: 'MediBill POS',
    audience: 'For medical stores',
    description: 'Purpose-built pharmacy workflows for medicine inventory, billing, batch handling, and expiry tracking.',
    features: ['Medicine stock', 'Batch tracking', 'Billing'],
    tag: 'Pharmacy',
    icon: HeartPulse,
    tone: 'cyan',
    image: '/images/products/medibill-pos-card.png',
  },
  {
    slug: 'medibill-pro',
    name: 'MediBill Pro',
    audience: 'For large-scale medical businesses',
    description: 'A scalable pharmacy management platform for multi-branch visibility, controls, and enterprise reporting.',
    features: ['Multi-branch', 'Expiry control', 'Reporting'],
    tag: 'Enterprise',
    icon: BarChart3,
    tone: 'indigo',
    image: '/images/products/medibill-pro-card.png',
  },
] as const;

export const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites and web applications shaped around clear business goals.',
    icon: Code2,
    image: '/images/services/web-development.png',
    features: ['Modern', 'Responsive', 'Scalable'],
    tone: 'blue',
  },
  {
    title: 'Custom Software Development',
    description: 'Purpose-built systems that fit your workflows instead of forcing a generic process.',
    icon: Blocks,
    image: '/images/services/business-automation.png',
    features: ['Tailored', 'Flexible', 'Secure'],
    tone: 'violet',
  },
  {
    title: 'Business Automation',
    description: 'Connected workflows that reduce repetitive work and make daily operations easier to manage.',
    icon: Workflow,
    image: '/images/services/business-automation.png',
    features: ['Efficient', 'Automated', 'Productive'],
    tone: 'teal',
  },
  {
    title: 'UI/UX & Software Design',
    description: 'Clear, user-centred interfaces for products that need to feel intuitive from day one.',
    icon: Palette,
    image: '/images/services/web-development.png',
    features: ['Modern', 'User-Centric', 'Creative'],
    tone: 'orange',
  },
  {
    title: 'Consulting & Support',
    description: 'Practical technology guidance and ongoing support for evolving software needs.',
    icon: Headphones,
    image: '/images/services/consulting-support.png',
    features: ['Guidance', 'Support', 'Growth'],
    tone: 'magenta',
  },
] as const;

export const highlights = [
  { title: 'Reliable solutions', icon: ShieldCheck },
  { title: 'Modern technology', icon: Sparkles },
  { title: 'User-centric design', icon: Users },
  { title: 'Scalable for growth', icon: Scaling },
] as const;

export const reasons = [
  {
    title: 'Innovative Solutions',
    description: 'Thoughtful software built around modern business challenges and everyday work.',
    icon: Sparkles,
  },
  {
    title: 'Reliable & Secure',
    description: 'Dependable foundations, considered access controls, and careful data handling.',
    icon: ShieldCheck,
  },
  {
    title: 'User-Centric Design',
    description: 'Interfaces that make complex workflows feel clear, familiar, and efficient.',
    icon: LayoutTemplate,
  },
  {
    title: 'Scalable for Growth',
    description: 'Flexible solutions designed to evolve as teams, locations, and needs expand.',
    icon: RefreshCw,
  },
] as const;

export const productSearchItems = products.map((product) => ({
  label: product.name,
  description: product.audience,
  href: `/products/${product.slug}`,
  icon: ShoppingBag,
}));

