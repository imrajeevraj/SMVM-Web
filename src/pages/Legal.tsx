import { Link } from 'react-router-dom';
import { policies, policyMetadata } from '../data/policies';
import { SupportRequestForm } from '../components/legal/SupportRequestForm';
import './Legal.css';

export function Legal({ type }: { type: string }) {
  const policy = policies.find(item => item.id === type)!;
  const metadata = policyMetadata(policy);
  return (
    <article className="legal-page"><div className="site-container">
      <header className="legal-hero">
        <p className="section-eyebrow">SMVM Softwares · Policies &amp; customer care</p>
        <h1>{policy.title}</h1><p className="legal-lead">{policy.description}</p>
        <dl className="legal-metadata"><div><dt>Last updated</dt><dd><time dateTime={metadata.lastUpdated}>{new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(metadata.lastUpdated))}</time></dd></div></dl>
        <button type="button" className="button-outline legal-print" onClick={() => window.print()}>Print this policy</button>
      </header>
      <div className="legal-layout">
        <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol>{policy.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\. /, '')}</a></li>)}{['refund', 'grievance'].includes(type) && <li><a href="#support-request">Prepare a request</a></li>}</ol></nav>
        <div className="legal-body">
          {policy.sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</section>)}
          {['refund', 'grievance'].includes(type) && <SupportRequestForm category={type === 'refund' ? 'Refund request' : 'Complaint'} />}
          <nav className="legal-related" aria-label="Related policies"><h2>Related policies</h2><div>{policies.filter(item => item.id !== type).map(item => <Link key={item.id} to={item.path}>{item.title}</Link>)}<Link to="/contact">Contact</Link></div></nav>
        </div>
      </div>
    </div></article>
  );
}

