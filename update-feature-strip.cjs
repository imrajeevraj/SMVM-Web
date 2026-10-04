const fs = require('fs');
let c = fs.readFileSync('src/data/camstore.ts', 'utf8');

c = c.replace(/export const featureStrip: FeatureItem\[\] = \[\s*\{\s*title:\s*'Easy Billing',\s*copy:\s*'Fast and reliable POS billing',\s*icon:\s*ReceiptText\s*\},\s*\{\s*title:\s*'Inventory Management',\s*copy:\s*'Track cameras, lenses & accessories',\s*icon:\s*Boxes\s*\},\s*\{\s*title:\s*'Customer Management',\s*copy:\s*'Maintain customer records',\s*icon:\s*Users\s*\},\s*\{\s*title:\s*'Purchase Management',\s*copy:\s*'Manage suppliers and purchases',\s*icon:\s*Truck\s*\},\s*\{\s*title:\s*'Service Management',\s*copy:\s*'Track camera repairs and services',\s*icon:\s*Wrench\s*\},\s*\{\s*title:\s*'Detailed Reports',\s*copy:\s*'Sales, stock & profit insights',\s*icon:\s*BarChart3\s*\},\s*\];/, `export const featureStrip: FeatureItem[] = [
  { title: 'Easy Billing', copy: 'Fast and reliable POS billing', icon: ShoppingCart, accent: '#ef4444' },
  { title: 'Inventory Management', copy: 'Track camera, lenses & accessories', icon: Boxes, accent: '#10b981' },
  { title: 'Customer Management', copy: 'Maintain complete customer records', icon: Users, accent: '#3b82f6' },
  { title: 'Purchase Management', copy: 'Manage suppliers and purchases', icon: Truck, accent: '#8b5cf6' },
  { title: 'Service Management', copy: 'Track camera repairs and services', icon: Wrench, accent: '#d946ef' },
  { title: 'Detailed Reports', copy: 'Sales, stock & profit insights', icon: BarChart3, accent: '#f97316' },
];`);

c = c.replace(/export type FeatureItem = \{ title: string; copy: string; icon: LucideIcon \};/, 'export type FeatureItem = { title: string; copy: string; icon: LucideIcon; accent?: string };');

fs.writeFileSync('src/data/camstore.ts', c);
