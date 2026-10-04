import { useEffect, useId, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AppWindow,
  BadgeCheck,
  Blocks,
  Briefcase,
  Bug,
  BarChart3,
  CloudCog,
  Code2,
  Database,
  Gauge,
  Globe2,
  Headphones,
  KeyRound,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  Link2,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  PanelTop,
  PlugZap,
  Rocket,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TabletSmartphone,
  TestTube2,
  UsersRound,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceShowcase.css';

export type ServiceSlug =
  | 'web-development'
  | 'custom-software-development'
  | 'mobile-android-app-development'
  | 'consulting-support';

type ServiceItem = { title: string; description: string; icon: LucideIcon; accent: string };
type ServiceTrack = { title: string; label: string; description: string; icon: LucideIcon; features: string[] };
type ServiceConfig = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  image: string;
  imageAlt: string;
  primary: string;
  secondary: string;
  heroIcon: LucideIcon;
  signals: { label: string; icon: LucideIcon }[];
  notes: { label: string; icon: LucideIcon; accent: string }[];
  capabilityIntro: string;
  capabilities: ServiceItem[];
  tracks: ServiceTrack[];
  delivery: { number: string; title: string; description: string }[];
  outcomes: { title: string; description: string; icon: LucideIcon }[];
};

const sharedDelivery = [
  { number: '01', title: 'Discover', description: 'Clarify goals, users, workflows, constraints, and the outcome the project needs to support.' },
  { number: '02', title: 'Plan & design', description: 'Shape the scope, experience, technical direction, milestones, and delivery priorities.' },
  { number: '03', title: 'Build & validate', description: 'Develop in focused stages, review progress, test the experience, and refine key journeys.' },
  { number: '04', title: 'Launch & support', description: 'Prepare the release, hand over the solution, and support agreed improvements after launch.' },
] as const;

const serviceConfigs: Record<ServiceSlug, ServiceConfig> = {
  'web-development': {
    slug: 'web-development',
    name: 'Web Development',
    eyebrow: 'Web experiences that work hard for your business',
    title: 'Build a faster, clearer',
    titleAccent: 'digital presence.',
    intro: 'We design and develop responsive business websites and web applications that communicate clearly, perform reliably, and make it easier for customers to take the next step.',
    image: '/images/services/web-development-home.png',
    imageAlt: 'Responsive website development workspace displayed across laptop, browser and mobile screens',
    primary: '22 119 255',
    secondary: '45 214 255',
    heroIcon: Code2,
    signals: [
      { label: 'Responsive by default', icon: MonitorSmartphone },
      { label: 'Performance focused', icon: Gauge },
      { label: 'Built to evolve', icon: Layers3 },
    ],
    notes: [
      { label: 'Desktop + mobile', icon: MonitorSmartphone, accent: '38 155 255' },
      { label: 'Clear user journeys', icon: UsersRound, accent: '33 209 225' },
    ],
    capabilityIntro: 'From a focused company website to a connected web platform, each build is structured around your content, users, and business priorities.',
    capabilities: [
      { title: 'Business websites', description: 'Professional sites that explain your offer, build trust, and create a clear path to enquiry.', icon: Briefcase, accent: '22 119 255' },
      { title: 'Responsive interfaces', description: 'Layouts designed to remain clear and usable across desktop, tablet, and mobile screens.', icon: MonitorSmartphone, accent: '31 178 255' },
      { title: 'Web applications', description: 'Purpose-built browser experiences for business workflows, portals, and customer-facing tools.', icon: AppWindow, accent: '74 105 255' },
      { title: 'E-commerce journeys', description: 'Product discovery, catalogue, enquiry, and commerce experiences planned around how customers buy.', icon: ShoppingCart, accent: '139 83 255' },
      { title: 'Content structure', description: 'Clear navigation and page hierarchy that help visitors find useful information quickly.', icon: PanelTop, accent: '14 165 233' },
      { title: 'Performance foundations', description: 'Practical image, code, and loading decisions that support a responsive experience.', icon: Gauge, accent: '6 182 212' },
      { title: 'API integration', description: 'Connect suitable forms, services, databases, and third-party systems where the project requires it.', icon: PlugZap, accent: '15 158 213' },
      { title: 'Testing & launch', description: 'Cross-device checks, production preparation, and a considered handover for release.', icon: TestTube2, accent: '34 197 94' },
    ],
    tracks: [
      { title: 'Business websites', label: 'Establish a strong presence', description: 'A focused website for businesses that need to explain services, build credibility, and generate qualified enquiries.', icon: Globe2, features: ['Service-led page architecture', 'Responsive content experience', 'Contact and enquiry journeys'] },
      { title: 'Commerce experiences', label: 'Help customers discover and act', description: 'Structured product and catalogue experiences designed around clear discovery and purchase or enquiry pathways.', icon: ShoppingCart, features: ['Product and category structure', 'Conversion-focused user journeys', 'Suitable commerce integrations'] },
      { title: 'Web applications', label: 'Turn workflows into a usable product', description: 'Interactive browser-based tools shaped around users, roles, data, and the tasks they need to complete.', icon: AppWindow, features: ['Role-aware interfaces', 'Connected data and APIs', 'Scalable component foundations'] },
    ],
    delivery: [...sharedDelivery],
    outcomes: [
      { title: 'Clearer customer journey', description: 'Visitors can understand your business and reach the right action with less friction.', icon: UsersRound },
      { title: 'Consistent experience', description: 'The site remains coherent across devices and common screen sizes.', icon: MonitorSmartphone },
      { title: 'Maintainable foundation', description: 'A structured build that can support content and feature improvements over time.', icon: Layers3 },
    ],
  },
  'custom-software-development': {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    eyebrow: 'Software shaped around your operation',
    title: 'Turn complex workflows into',
    titleAccent: 'clear business software.',
    intro: 'We design tailored systems around the way your team works—connecting information, reducing repetitive steps, and giving people a more dependable operating workspace.',
    image: '/images/services/custom-software-development-home.png',
    imageAlt: 'Connected custom software system with application modules, database and analytics',
    primary: '126 74 255',
    secondary: '49 174 255',
    heroIcon: Blocks,
    signals: [
      { label: 'Workflow-led', icon: Workflow },
      { label: 'Connected systems', icon: Link2 },
      { label: 'Role-aware', icon: KeyRound },
    ],
    notes: [
      { label: 'Tailored modules', icon: Blocks, accent: '139 92 246' },
      { label: 'One connected view', icon: Database, accent: '45 154 255' },
    ],
    capabilityIntro: 'The scope starts with real operational needs, then grows into a modular system that supports the right users, information, approvals, and reporting.',
    capabilities: [
      { title: 'Business systems', description: 'Central workspaces for the information, tasks, and controls your team uses every day.', icon: LayoutDashboard, accent: '126 74 255' },
      { title: 'Workflow automation', description: 'Structured steps and practical automation for repetitive operational processes.', icon: Workflow, accent: '148 72 255' },
      { title: 'Inventory & operations', description: 'Custom flows for stock, orders, service delivery, or internal resource tracking.', icon: Blocks, accent: '91 83 255' },
      { title: 'Dashboards & reporting', description: 'Useful operational views that bring important activity and trends into focus.', icon: BarChart3, accent: '45 130 255' },
      { title: 'Roles & access', description: 'Interfaces and permissions organised around the responsibilities of different users.', icon: KeyRound, accent: '67 97 238' },
      { title: 'Database solutions', description: 'Structured data foundations designed around the records and relationships the system needs.', icon: Database, accent: '42 155 220' },
      { title: 'System integration', description: 'Connect suitable APIs and existing tools to reduce disconnected work where feasible.', icon: Link2, accent: '14 165 233' },
      { title: 'Maintenance & evolution', description: 'A practical path for agreed updates, refinements, and new capabilities after launch.', icon: Wrench, accent: '168 85 247' },
    ],
    tracks: [
      { title: 'Operations platform', label: 'Bring daily work into one place', description: 'A tailored workspace for managing records, responsibilities, status, and the information teams need to act.', icon: LayoutDashboard, features: ['Role-based operating views', 'Structured records and status', 'Operational dashboards'] },
      { title: 'Workflow automation', label: 'Reduce repetitive coordination', description: 'A connected flow that replaces manual handoffs with clear stages, ownership, and useful notifications.', icon: Workflow, features: ['Defined process stages', 'Approvals and responsibility', 'Practical alerts and automation'] },
      { title: 'Connected systems', label: 'Close the gaps between tools', description: 'Integration-focused work that moves the right data between suitable applications and creates a clearer operating picture.', icon: Link2, features: ['API and database connections', 'Data flow mapping', 'Consolidated views'] },
    ],
    delivery: [...sharedDelivery],
    outcomes: [
      { title: 'Less fragmented work', description: 'Information and actions can move through a clearer, more consistent process.', icon: Workflow },
      { title: 'Better visibility', description: 'Teams can see the operational context they need without relying on scattered updates.', icon: BarChart3 },
      { title: 'Designed for change', description: 'A modular foundation can support agreed improvements as needs evolve.', icon: Blocks },
    ],
  },
  'mobile-android-app-development': {
    slug: 'mobile-android-app-development',
    name: 'Mobile & Android App Development',
    eyebrow: 'Useful mobile experiences for real users',
    title: 'Put your service where',
    titleAccent: 'your users already are.',
    intro: 'We create Android and cross-platform mobile applications with clear journeys, reliable integrations, and interfaces designed for the way people use phones every day.',
    image: '/images/services/mobile-app-development-home.png',
    imageAlt: 'Modern mobile application interfaces displayed across two smartphones',
    primary: '0 179 190',
    secondary: '38 144 255',
    heroIcon: Smartphone,
    signals: [
      { label: 'Android focused', icon: Smartphone },
      { label: 'Cross-platform options', icon: TabletSmartphone },
      { label: 'API connected', icon: PlugZap },
    ],
    notes: [
      { label: 'Touch-first journeys', icon: Smartphone, accent: '6 182 212' },
      { label: 'Connected services', icon: CloudCog, accent: '38 144 255' },
    ],
    capabilityIntro: 'From an internal field tool to a customer-facing application, the experience is planned around mobile context, focused actions, and dependable information flow.',
    capabilities: [
      { title: 'Android applications', description: 'Purpose-built Android experiences shaped around your users and project requirements.', icon: Smartphone, accent: '0 179 190' },
      { title: 'Cross-platform apps', description: 'Shared mobile experiences for suitable projects that need to reach more than one platform.', icon: TabletSmartphone, accent: '13 148 196' },
      { title: 'Mobile UI/UX', description: 'Touch-friendly interfaces with clear hierarchy, focused screens, and practical navigation.', icon: Palette, accent: '34 197 214' },
      { title: 'Business mobile tools', description: 'Apps for field activity, internal workflows, records, and task-oriented operations.', icon: Briefcase, accent: '14 165 233' },
      { title: 'API & backend connection', description: 'Connect the app to suitable services, accounts, records, and business data.', icon: PlugZap, accent: '37 99 235' },
      { title: 'Authentication flows', description: 'Appropriate sign-in and role-aware journeys designed around project needs.', icon: KeyRound, accent: '79 70 229' },
      { title: 'Testing & quality checks', description: 'Review important journeys across agreed devices and release conditions.', icon: TestTube2, accent: '16 185 129' },
      { title: 'Release support', description: 'Preparation and guidance for deployment, handover, and agreed post-launch updates.', icon: Rocket, accent: '59 130 246' },
    ],
    tracks: [
      { title: 'Android application', label: 'Build for your core audience', description: 'A focused Android experience designed around the devices, tasks, and journeys that matter most to your users.', icon: Smartphone, features: ['Android-first interaction design', 'Connected business data', 'Release preparation'] },
      { title: 'Cross-platform product', label: 'Reach users across platforms', description: 'A shared mobile application approach for suitable products that need consistent journeys across Android and iOS.', icon: TabletSmartphone, features: ['Shared experience strategy', 'Platform-aware behavior', 'Consistent product design'] },
      { title: 'Business mobility tool', label: 'Support work beyond the desk', description: 'A task-focused app for teams that need to capture, access, or update business information while moving.', icon: Briefcase, features: ['Field-friendly workflows', 'Role-specific tasks', 'API-connected records'] },
    ],
    delivery: [...sharedDelivery],
    outcomes: [
      { title: 'Focused mobile journeys', description: 'Users can complete important tasks through a clear, touch-friendly experience.', icon: Smartphone },
      { title: 'Connected information', description: 'The app can work with suitable services and business data instead of becoming another silo.', icon: PlugZap },
      { title: 'Release-ready thinking', description: 'Testing, device behavior, and deployment needs are considered throughout the build.', icon: Rocket },
    ],
  },
  'consulting-support': {
    slug: 'consulting-support',
    name: 'Consulting & Support',
    eyebrow: 'Practical guidance for better technology decisions',
    title: 'Move forward with',
    titleAccent: 'clear technical direction.',
    intro: 'We help businesses understand technology choices, plan implementation, troubleshoot issues, and keep agreed systems useful through practical, context-aware support.',
    image: '/images/services/consulting-support-home.png',
    imageAlt: 'Friendly digital support assistant with headset, communication and settings symbols',
    primary: '255 126 31',
    secondary: '35 139 255',
    heroIcon: Headphones,
    signals: [
      { label: 'Practical guidance', icon: SearchCheck },
      { label: 'Implementation help', icon: Wrench },
      { label: 'Ongoing support', icon: LifeBuoy },
    ],
    notes: [
      { label: 'Clear next steps', icon: SearchCheck, accent: '255 126 31' },
      { label: 'Human support', icon: MessageSquareText, accent: '35 139 255' },
    ],
    capabilityIntro: 'Support can begin with an idea, an implementation challenge, or an existing system that needs careful review and a clearer way forward.',
    capabilities: [
      { title: 'Technology consultation', description: 'Clarify the problem, priorities, risks, and realistic options before committing to a solution.', icon: SearchCheck, accent: '255 126 31' },
      { title: 'Solution planning', description: 'Translate business requirements into a structured technical direction and practical milestones.', icon: Layers3, accent: '255 149 44' },
      { title: 'Implementation guidance', description: 'Support teams through configuration, adoption, rollout, and key implementation decisions.', icon: Wrench, accent: '244 113 22' },
      { title: 'System review', description: 'Examine workflows, user friction, and technical concerns to identify useful improvements.', icon: Bug, accent: '234 88 12' },
      { title: 'Troubleshooting', description: 'Investigate agreed software and integration issues with a clear, evidence-led approach.', icon: ServerCog, accent: '35 139 255' },
      { title: 'Maintenance support', description: 'Planned assistance for updates, fixes, and operational continuity within the agreed scope.', icon: LifeBuoy, accent: '59 130 246' },
      { title: 'Integration advice', description: 'Assess suitable ways to connect systems, data, and services without unnecessary complexity.', icon: PlugZap, accent: '14 165 233' },
      { title: 'Team handover', description: 'Clear documentation, walkthroughs, and knowledge transfer for agreed solutions.', icon: UsersRound, accent: '8 145 178' },
    ],
    tracks: [
      { title: 'Discovery & direction', label: 'Make the next decision clearer', description: 'A focused engagement to understand the current situation, compare realistic options, and define the next useful step.', icon: SearchCheck, features: ['Requirement clarification', 'Option and risk review', 'Recommended next steps'] },
      { title: 'Implementation support', label: 'Turn the plan into progress', description: 'Practical guidance through setup, integration, rollout, and the decisions that appear during implementation.', icon: Wrench, features: ['Implementation checkpoints', 'Integration guidance', 'Adoption and handover support'] },
      { title: 'Ongoing assistance', label: 'Keep important systems useful', description: 'Agreed technical support for troubleshooting, maintenance, and planned improvements as needs change.', icon: LifeBuoy, features: ['Issue investigation', 'Maintenance planning', 'Improvement roadmap'] },
    ],
    delivery: [...sharedDelivery],
    outcomes: [
      { title: 'Clearer decisions', description: 'Technical choices are connected to business needs, constraints, and priorities.', icon: SearchCheck },
      { title: 'Lower implementation friction', description: 'Teams have a practical structure for resolving questions and moving work forward.', icon: Wrench },
      { title: 'More dependable operations', description: 'Agreed maintenance and support help important systems remain useful over time.', icon: ShieldCheck },
    ],
  },
};

function TrackNavigator({ config }: { config: ServiceConfig }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = useId();

  useEffect(() => setActiveIndex(0), [config.slug]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = config.tracks.length - 1;
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
  };

  const active = config.tracks[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className="service-navigator">
      <div className="service-navigator__tabs" role="tablist" aria-label={`${config.name} solution paths`}>
        {config.tracks.map((track, index) => {
          const Icon = track.icon;
          return (
            <button
              id={`${idPrefix}-tab-${index}`}
              key={track.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`${idPrefix}-panel-${index}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <Icon aria-hidden="true" />
              <span>{track.title}</span>
            </button>
          );
        })}
      </div>
      <motion.div
        key={`${config.slug}-${activeIndex}`}
        id={`${idPrefix}-panel-${activeIndex}`}
        className="service-navigator__panel"
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${activeIndex}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
      >
        <div className="service-navigator__panel-icon"><ActiveIcon aria-hidden="true" /></div>
        <div>
          <p>{active.label}</p>
          <h3>{active.title}</h3>
          <span>{active.description}</span>
        </div>
        <ul>
          {active.features.map((feature) => <li key={feature}><BadgeCheck aria-hidden="true" />{feature}</li>)}
        </ul>
      </motion.div>
    </div>
  );
}

export function ServiceShowcase({ service }: { service: ServiceSlug }) {
  const config = serviceConfigs[service];
  const shouldReduceMotion = useReducedMotion();
  const HeroIcon = config.heroIcon;
  const reveal = shouldReduceMotion ? {} : { initial: false as const, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-70px' }, transition: { duration: 0.45 } };

  return (
    <main className={`service-showcase service-showcase--${config.slug}`} style={{ '--service-rgb': config.primary, '--service-alt-rgb': config.secondary } as CSSProperties}>
      <section className="service-showcase-hero" aria-labelledby="service-showcase-title">
        <div className="service-showcase-shell">
          <nav className="service-showcase-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/services">Services</Link><span>/</span><span>{config.name}</span></nav>
          <div className="service-showcase-hero__grid">
            <div className="service-showcase-hero__copy">
              <p className="service-showcase-eyebrow"><HeroIcon aria-hidden="true" />{config.eyebrow}</p>
              <h1 id="service-showcase-title">{config.title} <span>{config.titleAccent}</span></h1>
              <p>{config.intro}</p>
              <div className="service-showcase-actions">
                <Link className="service-showcase-button service-showcase-button--primary" to={`/contact?service=${config.slug}`}><MessageSquareText aria-hidden="true" />Discuss your project</Link>
                <a className="service-showcase-button service-showcase-button--secondary" href={`#${config.slug}-capabilities`}><Blocks aria-hidden="true" />Explore capabilities</a>
              </div>
              <ul className="service-showcase-signals" aria-label={`${config.name} strengths`}>
                {config.signals.map(({ label, icon: Icon }) => <li className="service-signal" key={label} style={{ '--card-rgb': config.primary } as CSSProperties}><Icon aria-hidden="true" /><span>{label}</span></li>)}
              </ul>
            </div>
            <motion.div className="service-showcase-hero__visual" initial={shouldReduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55 }}>
              <span className="service-showcase-hero__glow" aria-hidden="true" />
              <img src={config.image} alt={config.imageAlt} />
              {config.notes.map(({ label, icon: Icon, accent }, index) => <span className={`service-visual-note service-visual-note--${index + 1}`} style={{ '--card-rgb': accent } as CSSProperties} key={label}><Icon aria-hidden="true" /><small>{label}</small></span>)}
            </motion.div>
          </div>
        </div>
      </section>

      <section id={`${config.slug}-capabilities`} className="service-showcase-section service-showcase-capabilities" aria-labelledby="service-capabilities-title">
        <div className="service-showcase-shell">
          <header className="service-showcase-heading">
            <div><p className="service-showcase-kicker">What we can build</p><h2 id="service-capabilities-title">A complete {config.name.toLowerCase()} capability set.</h2></div>
            <p>{config.capabilityIntro}</p>
          </header>
          <div className="service-capability-grid">
            {config.capabilities.map(({ title, description, icon: Icon, accent }, index) => <motion.article {...reveal} transition={{ duration: .4, delay: (index % 4) * .05 }} className="service-capability-card" style={{ '--card-rgb': accent } as CSSProperties} key={title}><div><span><Icon aria-hidden="true" /></span><small>{String(index + 1).padStart(2, '0')}</small></div><h3>{title}</h3><p>{description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="service-showcase-section service-showcase-paths" aria-labelledby="service-paths-title">
        <div className="service-showcase-shell">
          <header className="service-showcase-heading service-showcase-heading--center"><div><p className="service-showcase-kicker">Choose the right starting point</p><h2 id="service-paths-title">Explore common solution paths.</h2></div><p>Select a path to see how this service can be shaped around a specific business need.</p></header>
          <TrackNavigator config={config} />
        </div>
      </section>

      <section className="service-showcase-section service-showcase-delivery" aria-labelledby="service-delivery-title">
        <div className="service-showcase-shell">
          <header className="service-showcase-heading"><div><p className="service-showcase-kicker">How we work with you</p><h2 id="service-delivery-title">A clear route from idea to delivery.</h2></div><p>Each engagement is adjusted to the scope, but the work stays visible, collaborative, and tied to agreed priorities.</p></header>
          <ol className="service-delivery-grid">
            {config.delivery.map((step, index) => <motion.li {...reveal} className="service-delivery-step" style={{ '--card-rgb': index % 2 ? config.secondary : config.primary } as CSSProperties} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></motion.li>)}
          </ol>
        </div>
      </section>

      <section className="service-showcase-section service-showcase-results" aria-labelledby="service-results-title">
        <div className="service-showcase-shell service-showcase-results__grid">
          <div>
            <p className="service-showcase-kicker">Designed around useful outcomes</p>
            <h2 id="service-results-title">Technology should make the next step easier.</h2>
            <p>We connect design and engineering decisions to the experience your users need and the operational result your business is trying to achieve.</p>
            <Link className="service-showcase-button service-showcase-button--primary" to={`/contact?service=${config.slug}`}><MessageSquareText aria-hidden="true" />Start a conversation</Link>
          </div>
          <div className="service-outcome-list">
            {config.outcomes.map(({ title, description, icon: Icon }, index) => <article className="service-outcome" style={{ '--card-rgb': index === 1 ? config.secondary : config.primary } as CSSProperties} key={title}><span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="service-showcase-final" aria-labelledby="service-final-title">
        <div className="service-showcase-shell service-showcase-cta">
          <div><p className="service-showcase-kicker">Have a project in mind?</p><h2 id="service-final-title">Let&apos;s turn your next idea into a useful digital solution.</h2><p>Tell us what you want to improve, who the solution is for, and where you are today.</p></div>
          <div><Link className="service-showcase-button service-showcase-button--light" to={`/contact?service=${config.slug}`}><MessageSquareText aria-hidden="true" />Contact SMVM</Link><Link className="service-showcase-button service-showcase-button--ghost" to="/services"><Globe2 aria-hidden="true" />View all services</Link></div>
        </div>
      </section>
    </main>
  );
}
