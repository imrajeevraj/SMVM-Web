import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Which SMVM product is right for my business?',
    answer: 'CamStore POS is focused on single stores and small shops, while CamBill POS supports larger and multi-store retail operations. MediBill POS is designed for medical stores, and MediBill Pro is intended for larger, multi-branch medical businesses.',
  },
  {
    question: 'Are SMVM products secure?',
    answer: 'Our products are designed with structured access and careful business-data handling in mind. Because security needs vary by deployment and workflow, our team can review the controls that matter to your organisation before you choose a product.',
  },
  {
    question: 'Can I upgrade as my business grows?',
    answer: 'Yes. We can review your changing store, branch, user, and reporting needs and recommend the most appropriate product path for the next stage of your business.',
  },
  {
    question: 'Can the software be customised?',
    answer: 'SMVM also provides custom software development for requirements that go beyond a standard product workflow. The suitable scope and approach can be discussed during an enquiry.',
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Onboarding, training, and ongoing support arrangements can be discussed with our team based on the selected product and your operational needs.',
  },
  {
    question: 'How can I request a product demo?',
    answer: 'Use the contact page to tell us which product you are considering and share a few details about your business. Our team can then coordinate the most relevant next step.',
  },
];

export function ProductFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <section className="products-page-section products-faq" aria-labelledby="products-faq-title">
      <div className="products-page-shell products-faq-layout">
        <div className="products-faq-intro">
          <p className="products-page-eyebrow">Frequently asked questions</p>
          <h2 id="products-faq-title">Helpful answers before you decide</h2>
          <p>Still unsure? Tell us about your workflow and we’ll help you narrow down the options.</p>
          <Link className="products-text-link" to="/contact">Talk to our team <span aria-hidden="true">→</span></Link>
        </div>
        <div className="products-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            const buttonId = `${idPrefix}-faq-button-${index}`;
            const panelId = `${idPrefix}-faq-panel-${index}`;
            return (
              <article className={`products-faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenItem(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="products-faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
