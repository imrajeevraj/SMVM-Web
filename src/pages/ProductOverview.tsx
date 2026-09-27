import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { products } from '@/data/site';

export function ProductOverview() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) return <Navigate to="/products" replace />;
  const Icon = product.icon;

  return (
    <div className="bg-background pb-24 pt-32 sm:pt-36">
      <div className="site-container">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-brand"><ArrowLeft className="h-4 w-4" /> All products</Link>
        <div className="mt-9 grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">SMVM POS solution</span>
            <h1 className="mt-4 text-5xl font-extrabold tracking-[-.04em] text-text sm:text-6xl">{product.name}</h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[.14em] text-brand">{product.audience}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">{product.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-text"><CheckCircle2 className="h-5 w-5 text-emerald-500" />{feature}</li>)}
            </ul>
            <Link to="/contact" className="button-primary mt-9">Discuss {product.name} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand/15 blur-[100px]" />
            {product.image ? <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-2 shadow-2xl"><img src={product.image} alt={`${product.name} interface preview`} className="rounded-[20px]" /></div> : <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[32px] border border-border bg-surface shadow-2xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(32,217,255,.18),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,.2),transparent_35%)]" /><span className="relative grid h-32 w-32 place-items-center rounded-[36px] border border-brand/20 bg-brand/10 text-brand shadow-xl"><Icon className="h-16 w-16" /></span></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

