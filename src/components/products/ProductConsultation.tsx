import { ArrowRight, BarChart3, BadgeCheck, Briefcase, Boxes, CalendarDays, MessageCircle, MapPin, Settings2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';

const comparisonRows = [
  ['Best suited for', 'Single stores & small shops', 'Large stores & enterprises', 'Medical stores', 'Large-scale medical businesses'],
  ['Business focus', 'Retail', 'Retail', 'Pharmacy', 'Pharmacy'],
  ['Location model', 'Single-store focus', 'Multi-store operations', 'Focused medical store workflows', 'Multi-branch visibility'],
  ['Core highlights', 'Inventory, billing, customers', 'Analytics, user roles, reporting', 'Medicine stock, batch tracking, billing', 'Expiry control, reporting, branch controls'],
] as const;

const rowIcons = {
  'Best suited for': BadgeCheck,
  'Business focus': Briefcase,
  'Location model': MapPin,
  'Core highlights': Star,
};

export function ProductConsultation() {
  return (
    <>
      <section className="products-page-section products-comparison" id="product-comparison" aria-labelledby="product-comparison-title">
        <div className="products-page-shell">
          <div className="products-section-heading products-section-heading-centered">
            <div>
              <div className="products-page-eyebrow-wrapper">
                <span className="eyebrow-line" aria-hidden="true" />
                <p className="products-page-eyebrow">Product comparison</p>
                <span className="eyebrow-line" aria-hidden="true" />
              </div>
              <h2 id="product-comparison-title">Find your <span className="benefit-text-gradient">best-fit solution</span></h2>
              <p id="product-comparison-description">A quick side-by-side view of the intended use for each SMVM product.</p>
            </div>
          </div>
          <div className="products-comparison-scroll" tabIndex={0} aria-label="Scrollable product comparison">
            <table aria-describedby="product-comparison-description" className="comparison-table-enhanced">
              <thead>
                <tr>
                  <th scope="col" className="compare-th-title">
                    <div className="compare-th-content">
                      <div className="compare-th-main-icon">
                        <Star size={32} strokeWidth={2.5} />
                      </div>
                      <h3>Compare</h3>
                      <p>Key differences at a glance</p>
                    </div>
                  </th>
                  {products.map((p) => {
                    const Icon = p.icon;
                    return (
                      <th scope="col" key={p.slug} style={{ '--product-rgb': p.accent } as React.CSSProperties}>
                        <div className="compare-th-product">
                          <div className="compare-th-header">
                            <span className="compare-th-icon"><Icon size={20} /></span>
                            <div>
                              <h4>{p.name}</h4>
                              <p>{p.audience}</p>
                            </div>
                          </div>
                          <div className="comparison-product-image-wrapper">
                            <img src={p.image} alt={p.name} loading="lazy" className="compare-th-image" />
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, ...values]) => {
                  const RowIcon = rowIcons[label as keyof typeof rowIcons];
                  return (
                    <tr key={label}>
                      <th scope="row">
                        <div className="compare-td-label">
                          <span className="compare-td-icon"><RowIcon size={16} /></span>
                          <span className="compare-td-text">{label}</span>
                        </div>
                      </th>
                      {values.map((value, idx) => (
                        <td key={value} style={{ '--product-rgb': products[idx].accent } as React.CSSProperties}>
                          <div className="compare-td-value">
                            <span className="compare-check-icon"><BadgeCheck size={14} /></span>
                            <span className="compare-td-text">{value}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr className="compare-row-buttons">
                  <th scope="row">
                    <div className="compare-button disabled">Explore product</div>
                  </th>
                  {products.map((p) => (
                    <td key={p.slug} style={{ '--product-rgb': p.accent } as React.CSSProperties}>
                      <Link to={`/products/${p.slug}`} className="compare-button">
                        Explore {p.name} <ArrowRight size={14} />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="products-page-section products-consultation" aria-labelledby="products-consultation-title">
        <div className="products-page-shell">
          <div className="products-consultation-card">
            <div className="products-consultation-copy">
              <p className="products-page-eyebrow">Need help deciding?</p>
              <h2 id="products-consultation-title">Not sure which product is <span>right for you?</span></h2>
              <p>Our team can help you choose the best solution based on your business size, industry, and future goals.</p>
              <div className="products-consultation-actions">
                <Link className="products-button products-button-light" to="/contact"><CalendarDays aria-hidden="true" /> Get a Free Consultation <ArrowRight aria-hidden="true" /></Link>
                <a className="products-button products-button-dark-outline" href="#product-comparison"><Boxes aria-hidden="true" /> Compare Products <ArrowRight aria-hidden="true" /></a>
              </div>
              <ul className="products-consultation-benefits" aria-label="Consultation benefits">
                <li><span><MessageCircle aria-hidden="true" /></span><div><strong>Expert Guidance</strong><small>From our product specialists</small></div></li>
                <li><span><Settings2 aria-hidden="true" /></span><div><strong>Tailored Recommendations</strong><small>Based on your business needs</small></div></li>
                <li><span><BarChart3 aria-hidden="true" /></span><div><strong>Faster Decisions</strong><small>Find the right solution with confidence</small></div></li>
              </ul>
            </div>
            <div className="products-consultation-art">
              <img src="/images/services/consulting-support.png" alt="Digital consulting and software support illustration" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
