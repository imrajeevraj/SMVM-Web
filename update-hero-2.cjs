const fs = require('fs');
let c = fs.readFileSync('src/components/camstore/CamStoreHero.tsx', 'utf8');
c = c.replace(
    /<li key=\{t\.label\}><t\.icon[^<]+<\/t\.icon><div><b>\{t\.value\}<\/b><span>\{t\.label\}<\/span><\/div><\/li>/g,
    '<li key={t.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}><t.icon aria-hidden="true" style={{ width: "32px", height: "32px", color: "rgb(var(--cs-rgb))" }} /><div style={{ display: "flex", flexDirection: "column" }}><b>{t.value}</b><span>{t.label}</span></div></li>'
);

// Fallback if the previous regex didn't match (because it's a self-closing tag)
c = c.replace(
    /<li key=\{t\.label\}><t\.icon aria-hidden="true" className="w-8 h-8 text-blue-500 mb-2" \/><div><b>\{t\.value\}<\/b><span>\{t\.label\}<\/span><\/div><\/li>/g,
    '<li key={t.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", borderLeft: 0, paddingLeft: 0, padding: 0 }}><t.icon aria-hidden="true" style={{ width: "32px", height: "32px", color: "rgb(var(--cs-rgb))" }} /><div style={{ display: "flex", flexDirection: "column", gap: 0, paddingLeft: "4px" }}><b>{t.value}</b><span>{t.label}</span></div></li>'
);

fs.writeFileSync('src/components/camstore/CamStoreHero.tsx', c);
