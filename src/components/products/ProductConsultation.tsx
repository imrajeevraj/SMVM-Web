import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const comparisonRows = [
  ['Best suited for', 'Single stores & small shops', 'Large stores & enterprises', 'Medical stores', 'Large-scale medical businesses'],
  ['Business focus', 'Retail', 'Retail', 'Pharmacy', 'Pharmacy'],
  ['Location model', 'Single-store focus', 'Multi-store operations', 'Focused medical store workflows', 'Multi-branch visibility'],
  ['Core highlights', 'Inventory, billing, customers', 'Analytics, user roles, reporting', 'Medicine stock, batch tracking, billing', 'Expiry control, reporting, branch controls'],
];

export function ProductConsultation() {
  return (
    <>
      <section className="products-page-section products-comparison" id="product-comparison" aria-labelledby="product-comparison-title">
        <div className="products-page-shell">
          <div className="products-section-heading">
            <div>
              <p className="products-page-eyebrow">Product comparison</p>
              <h2 id="product-comparison-title">Find your best-fit solution</h2>
              <p id="product-comparison-description">A quick side-by-side view of the intended use for each SMVM product.</p>
            </div>
          </div>
          <div className="products-comparison-scroll" tabIndex={0} aria-label="Scrollable product comparison">
            <table aria-describedby="product-comparison-description">
              <thead>
                <tr>
                  <th scope="col">Compare</th>
                  <th scope="col">CamStore POS</th>
                  <th scope="col">CamBill POS</th>
                  <th scope="col">MediBill POS</th>
                  <th scope="col">MediBill Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, ...values]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {values.map((value) => <td key={value}><Check aria-hidden="true" /> {value}</td>)}
                  </tr>
                ))}
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
              <h2 id="products-consultation-title">Not sure which product is right for you?</h2>
              <p>Our team can help you choose the best solution based on your business size, industry, and future goals.</p>
              <div className="products-hero-actions">
                <Link className="products-button products-button-light" to="/contact">Get a Free Consultation <ArrowRight aria-hidden="true" /></Link>
                <a className="products-button products-button-dark-outline" href="#product-comparison">Compare Products <ArrowRight aria-hidden="true" /></a>
              </div>
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
