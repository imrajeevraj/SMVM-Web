import {
  Aperture,
  Backpack,
  BatteryCharging,
  Camera,
  MemoryStick,
  Package,
  Plug,
  Triangle,
} from 'lucide-react';
import { Reveal, SectionHead } from './shared';

const categories = [
  { label: 'Cameras', icon: Camera },
  { label: 'Lenses', icon: Aperture },
  { label: 'Accessories', icon: Plug },
  { label: 'Tripods', icon: Triangle },
  { label: 'Bags', icon: Backpack },
  { label: 'Memory Cards', icon: MemoryStick },
  { label: 'Batteries', icon: BatteryCharging },
  { label: 'Other Items', icon: Package },
];

export function ProductManagement() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-products-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-products-title"
            align="center"
            title="Manage Every Product With Confidence"
            copy="Organize and track your complete camera store inventory — cameras, lenses, accessories and more."
          />
        </Reveal>
        
        <Reveal delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', flexWrap: 'wrap', gap: '20px' }}>
            {categories.map((cat) => (
              <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <cat.icon size={40} style={{ color: '#1e293b' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>{cat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
