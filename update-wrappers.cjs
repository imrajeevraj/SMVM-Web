const fs = require('fs');
let c1 = fs.readFileSync('src/components/camstore/ServiceManagement.tsx', 'utf8');
c1 = c1.replace(/<section className="cs-section[^>]+>/, '<div aria-labelledby="cs-service-title" style={{ width: "100%" }}>');
c1 = c1.replace(/<div className="site-container[^>]+>/, '<div>');
c1 = c1.replace(/<\/div>\s*<\/section>/, '</div></div>');
fs.writeFileSync('src/components/camstore/ServiceManagement.tsx', c1);

let c2 = fs.readFileSync('src/components/camstore/ReportsShowcase.tsx', 'utf8');
c2 = c2.replace(/<section className="cs-section[^>]+>/, '<div aria-labelledby="cs-reports-title" style={{ width: "100%" }}>');
c2 = c2.replace(/<div className="site-container[^>]+>/, '<div>');
c2 = c2.replace(/<\/div>\s*<\/section>/, '</div></div>');
fs.writeFileSync('src/components/camstore/ReportsShowcase.tsx', c2);
