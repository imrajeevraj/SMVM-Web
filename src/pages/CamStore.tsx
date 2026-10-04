import { CamStoreCTA } from '@/components/camstore/CamStoreCTA';
import { CamStoreFeatureStrip } from '@/components/camstore/CamStoreFeatureStrip';
import { CamStoreGallery } from '@/components/camstore/CamStoreGallery';
import { CamStoreHero } from '@/components/camstore/CamStoreHero';
import { CamStoreKeyFeatures } from '@/components/camstore/CamStoreKeyFeatures';
import { CamStoreWorkflow } from '@/components/camstore/CamStoreWorkflow';
import { BillingShowcase } from '@/components/camstore/BillingShowcase';
import { InventoryShowcase } from '@/components/camstore/InventoryShowcase';
import { InvoiceShowcase } from '@/components/camstore/InvoiceShowcase';
import { ProductManagement } from '@/components/camstore/ProductManagement';
import { ReportsShowcase } from '@/components/camstore/ReportsShowcase';
import { ServiceManagement } from '@/components/camstore/ServiceManagement';
import { WhyCamStore } from '@/components/camstore/WhyCamStore';
import './CamStore.css';

/** /products/camstore-pos: composes the CamStore POS product page. Content lives in src/data/camstore.ts. */
export function CamStore() {
  return (
    <div className="cs-page">
      <CamStoreHero />
      <CamStoreFeatureStrip />
      <CamStoreKeyFeatures />
      <InventoryShowcase />
      <BillingShowcase />
      <ProductManagement />
      <InvoiceShowcase />
      <ServiceManagement />
      <ReportsShowcase />
      <WhyCamStore />
      <CamStoreWorkflow />
      <CamStoreGallery />
      <CamStoreCTA />
    </div>
  );
}
