import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  ['Home', '/'], ['Products', '/products'], ['Services', '/#services'], ['About Us', '/about'], ['Our Vision', '/vision'], ['Contact Us', '/contact'],
] as const;

const productLinks = [
  ['CamStore POS', '/products/camstore-pos'], ['CamBill POS', '/products/cambill-pos'], ['MediBill POS', '/products/medibill-pos'], ['MediBill Pro', '/products/medibill-pro'],
] as const;

const serviceLinks = ['Web Development', 'Custom Software', 'Business Automation', 'Consulting & Support'];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040d20] text-slate-300">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.8fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <img src="/images/brand/smvm-mark-3d-smooth.png" alt="" className="h-12 w-12 object-contain" />
              <span><strong className="block text-xl font-extrabold tracking-[.08em] text-white">SMVM</strong><small className="block text-[10px] font-bold uppercase tracking-[.25em] text-slate-400">Softwares</small></span>
            </Link>
            <p className="mt-6 text-lg font-semibold text-white">Where Creativity Meets Innovation</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Modern software products and technology services for businesses ready to work smarter.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"><Mail className="h-4 w-4" /> Send an enquiry <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <FooterColumn title="Quick links" links={quickLinks} />
          <FooterColumn title="Products" links={productLinks} />
          <div>
            <h2 className="text-sm font-bold text-white">Services</h2>
            <ul className="mt-5 space-y-3.5">
              {serviceLinks.map((label) => <li key={label}><Link to="/#services" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">{label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SMVM Softwares. All rights reserved.</p>
          <div className="flex gap-6"><Link to="/privacy" className="hover:text-slate-200">Privacy Policy</Link><Link to="/terms" className="hover:text-slate-200">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div><h2 className="text-sm font-bold text-white">{title}</h2><ul className="mt-5 space-y-3.5">{links.map(([label, href]) => <li key={label}><Link to={href} className="text-sm text-slate-400 transition-colors hover:text-cyan-300">{label}</Link></li>)}</ul></div>;
}

