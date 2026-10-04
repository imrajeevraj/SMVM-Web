const fs = require('fs');
let c = fs.readFileSync('src/components/camstore/CamStoreFeatureStrip.tsx', 'utf8');

c = c.replace(/<span className="cs-icon"><Icon aria-hidden="true" \/><\/span>/, '<span className="cs-icon" style={accent ? { color: accent } : {}}><Icon aria-hidden="true" /></span>');
c = c.replace(/\{featureStrip\.map\(\(\{ title, copy, icon: Icon \}\) => \(/, '{featureStrip.map(({ title, copy, icon: Icon, accent }) => (');

fs.writeFileSync('src/components/camstore/CamStoreFeatureStrip.tsx', c);
