import { ProductsSection } from '@/components/home/ProductsSection';

export function Products() {
  return (
    <div className="bg-background pt-20">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#06152f] px-4 py-20 text-center text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(32,217,255,.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,.2),transparent_34%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="section-eyebrow text-cyan-300">SMVM product suite</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-.04em] sm:text-6xl">Software made for real business workflows</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Explore POS solutions for retailers, enterprises, medical stores, and multi-branch pharmacy businesses.</p>
        </div>
      </section>
      <ProductsSection />
    </div>
  );
}

