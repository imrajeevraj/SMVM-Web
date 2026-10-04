const fs = require('fs');
let c = fs.readFileSync('src/data/camstore.ts', 'utf8');
c = c.replace(/export const whyCards: Array<FeatureItem & \{ number: string \}> = \[/g, 'export const whyCards: Array<FeatureItem & { number: string }> = [');
c = c.replace(/\{ number: '01', title: 'Built for Camera Stores', copy: 'Designed around the real workflows of camera and photography equipment businesses.', icon: Store \},/g, '{ number: \'01\', title: \'Built for Camera Stores\', copy: \'Designed around the real workflows of camera and photography equipment businesses.\', icon: Store, accent: \'#ef4444\' },');
c = c.replace(/\{ number: '02', title: 'Simple & Fast', copy: 'A clean interface that makes everyday billing and inventory management easier.', icon: ShoppingCart \},/g, '{ number: \'02\', title: \'Simple & Fast\', copy: \'A clean interface that makes everyday billing and inventory management easier.\', icon: Zap, accent: \'#a855f7\' },');
c = c.replace(/\{ number: '03', title: 'Powerful Inventory Control', copy: 'Track cameras, lenses, accessories, stock levels and product information.', icon: PackageCheck \},/g, '{ number: \'03\', title: \'Powerful Inventory Control\', copy: \'Track cameras, lenses, accessories, stock levels and product information.\', icon: PackageCheck, accent: \'#10b981\' },');
c = c.replace(/\{ number: '04', title: 'Ready to Grow', copy: 'Built to support growing stores and expanding product catalogs.', icon: BarChart3 \},/g, '{ number: \'04\', title: \'Ready to Grow\', copy: \'Built to support growing stores and expanding product catalogs.\', icon: BarChart3, accent: \'#f97316\' },');
fs.writeFileSync('src/data/camstore.ts', c);

let c2 = fs.readFileSync('src/components/camstore/WhyCamStore.tsx', 'utf8');
c2 = c2.replace(/\{whyCards\.map\(\(\{\s*title,\s*copy,\s*icon:\s*Icon\s*\}\) => \(/, '{whyCards.map(({ title, copy, icon: Icon, accent }) => (');
c2 = c2.replace(/<span className="cs-icon cs-icon--sm">/, '<span className="cs-icon cs-icon--sm" style={{ color: accent, backgroundColor: `${accent}1A` }}>');
fs.writeFileSync('src/components/camstore/WhyCamStore.tsx', c2);
