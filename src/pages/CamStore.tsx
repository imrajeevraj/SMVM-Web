import { CamStoreCTA } from '@/components/camstore/CamStoreCTA';
import { CamStoreHero } from '@/components/camstore/CamStoreHero';
import { CamStoreKeyFeatures } from '@/components/camstore/CamStoreKeyFeatures';
import { CamStoreWorkflow } from '@/components/camstore/CamStoreWorkflow';
import { BillingShowcase } from '@/components/camstore/BillingShowcase';
import { InvoiceShowcase } from '@/components/camstore/InvoiceShowcase';
import { SmartStoreManagement } from '@/components/camstore/SmartStoreManagement';
import { WhyCamStore } from '@/components/camstore/WhyCamStore';
import './CamStore.css';
import '../components/camstore/mock.css';

/** /products/camstore-pos: composes the CamStore POS product page. Content lives in src/data/camstore.ts. */
export function CamStore() {
  return (
    <div className="cs-page">
      <CamStoreHero />
      <CamStoreKeyFeatures />
      <SmartStoreManagement />
      <BillingShowcase />
      <InvoiceShowcase />
      <WhyCamStore />
      <CamStoreWorkflow />
      <CamStoreCTA />
    </div>
  );
}
