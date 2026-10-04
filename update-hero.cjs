const fs = require('fs');
let c = fs.readFileSync('src/components/camstore/CamStoreHero.tsx', 'utf8');

c = c.replace(/<li key=\{t\.label\}><b>\{t\.value\}<\/b><span>\{t\.label\}<\/span><\/li>/, `<li key={t.label}><t.icon aria-hidden="true" className="w-8 h-8 text-blue-500 mb-2" /><div><b>{t.value}</b><span>{t.label}</span></div></li>`);

fs.writeFileSync('src/components/camstore/CamStoreHero.tsx', c);
