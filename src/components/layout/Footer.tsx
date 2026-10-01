import {
  ArrowUp,
  BarChart3,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Package,
  Settings,
  ShieldCheck,
  Users,
  Youtube,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  ['Home', '/'],
  ['Products', '/#products'],
  ['Services', '/#services'],
  ['About Us', '/about'],
  ['Our Vision', '/vision'],
  ['Contact Us', '/contact'],
] as const;

const productLinks = [
  ['CamStore POS', '/products/camstore-pos'],
  ['CamBill POS', '/products/cambill-pos'],
  ['MediBill POS', '/products/medibill-pos'],
  ['MediBill Pro', '/products/medibill-pro'],
] as const;

const serviceLinks = [
  ['Web Development', '/#service-web-development'],
  ['Custom Software', '/#service-custom-software-development'],
  ['Mobile App Development', '/#service-mobile-android-app-development'],
  ['Consulting & Support', '/#service-consulting-support'],
] as const;

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: Youtube },
] as const;

export function Footer() {
  const scrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="site-footer scroll-mt-24">
      <div className="footer-grid-pattern" aria-hidden="true" />
      <div className="footer-wave footer-wave-left" aria-hidden="true" />
      <div className="footer-wave footer-wave-right" aria-hidden="true" />

      <div className="footer-shell site-container relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="footer-topline" aria-hidden="true">
          <span className="footer-topline-beam" />
          <span className="footer-topline-label">Modern software <i /> Smarter businesses</span>
          <span className="footer-topline-beam" />
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand-block">
            <Link to="/" className="footer-logo" aria-label="SMVM Softwares home">
              <img src="/images/brand/smvm-mark-3d-smooth.png" alt="" />
              <span>
                <strong>SMVM</strong>
                <small>Softwares</small>
              </span>
            </Link>

            <h2>Where Creativity Meets Innovation</h2>
            <p>Modern software products and technology services for businesses ready to work smarter.</p>

            <div className="footer-feature-row" aria-label="SMVM strengths">
              <FooterFeature icon={Zap} label="Innovative Solutions" />
              <FooterFeature icon={ShieldCheck} label="Reliable Technology" />
              <FooterFeature icon={BarChart3} label="Business Growth" />
            </div>

            <Link to="/contact" className="footer-enquiry-button">
              <Mail className="h-5 w-5" />
              <span>Send an enquiry</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <FooterColumn title="Quick links" icon={Users} links={quickLinks} />
          <FooterColumn title="Products" icon={Package} links={productLinks} />
          <FooterColumn title="Services" icon={Settings} links={serviceLinks} />

          <div className="footer-brand-visual" aria-hidden="true">
            <span className="footer-visual-halo" />
            <span className="footer-glass-plate footer-glass-plate-back" />
            <span className="footer-glass-plate footer-glass-plate-mid" />
            <span className="footer-glass-plate footer-glass-plate-front">
              <img src="/images/brand/smvm-mark-3d-smooth.png" alt="" />
            </span>
            <span className="footer-visual-orbit" />
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal-row">
            <p>© {new Date().getFullYear()} SMVM Softwares. All rights reserved.</p>
            <span aria-hidden="true" />
            <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true" />
            <Link to="/terms">Terms of Service</Link>
            <span aria-hidden="true" />
            <Link to="/cookies">Cookie Policy</Link>
          </div>

          <div className="footer-social-row">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Open SMVM ${label} page`}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <span className="footer-social-divider" aria-hidden="true" />
            <button type="button" onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterFeature({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="footer-feature">
      <span><Icon className="h-5 w-5" /></span>
      {label}
    </span>
  );
}

function FooterColumn({ title, icon: Icon, links }: { title: string; icon: LucideIcon; links: readonly (readonly [string, string])[] }) {
  return (
    <nav className="footer-link-column" aria-label={`${title} footer navigation`}>
      <h2><span><Icon className="h-5 w-5" /></span>{title}</h2>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href}><span>{label}</span><ChevronRight className="h-4 w-4" /></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
