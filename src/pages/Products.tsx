import { ProductBenefits } from '@/components/products/ProductBenefits';
import { ProductConsultation } from '@/components/products/ProductConsultation';
import { ProductFAQ } from '@/components/products/ProductFAQ';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductsHero } from '@/components/products/ProductsHero';
import '@/components/products/ProductsPage.css';

export function Products() {
  return (
    <main className="products-page">
      <ProductsHero />
      <ProductGrid />
      <ProductBenefits />
      <ProductConsultation />
      <ProductFAQ />
    </main>
  );
}

