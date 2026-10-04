const fs = require('fs');
const path = require('path');
const dir = 'src/components/camstore';

const files = [
  'BillingShowcase.tsx', 'CamStoreCTA.tsx', 'CamStoreFeatureStrip.tsx',
  'CamStoreGallery.tsx', 'CamStoreHero.tsx', 'CamStoreKeyFeatures.tsx',
  'CamStoreWorkflow.tsx', 'InventoryShowcase.tsx', 'InvoiceShowcase.tsx',
  'ProductManagement.tsx', 'ReportsShowcase.tsx', 'ServiceManagement.tsx',
  'WhyCamStore.tsx'
];

files.forEach(f => {
  const name = f.replace('.tsx', '');
  const content = `export function ${name}() { return <section className="site-container"><h2>${name}</h2><p>Under Construction</p></section>; }\n`;
  fs.writeFileSync(path.join(dir, f), content);
});

fs.writeFileSync(path.join(dir, 'shared.tsx'), 'export {};\n');
fs.writeFileSync(path.join(dir, 'screens.tsx'), 'export {};\n');
fs.writeFileSync(path.join(dir, 'mock.css'), '');
fs.writeFileSync('src/data/camstore.ts', 'export {};\n');
