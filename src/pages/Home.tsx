import { CompanySection } from '@/components/home/CompanySection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Hero } from '@/components/home/Hero';
import { ProductsSection } from '@/components/home/ProductsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { BusinessTrustSection, TestimonialsSection } from '@/components/home/TrustSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseSection />
      <BusinessTrustSection />
      <CompanySection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}

