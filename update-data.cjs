const fs = require('fs');
let c = fs.readFileSync('src/data/camstore.ts', 'utf8');

c = c.replace(/export const trustIndicators = \[\s*\{\s*value:\s*'1000\+',\s*label:\s*'Stores Trust Us'\s*\},\s*\{\s*value:\s*'50\+',\s*label:\s*'Powerful Features'\s*\},\s*\{\s*value:\s*'Easy',\s*label:\s*'Setup'\s*\},\s*\{\s*value:\s*'Lifetime',\s*label:\s*'Updates'\s*\},\s*\] as const;/, `export const trustIndicators = [
  { value: '1000+', label: 'Stores Trust Us', icon: Users },
  { value: '50+', label: 'Powerful Features', icon: Settings },
  { value: 'Easy Setup', label: 'Quick Installation', icon: Zap },
  { value: 'Lifetime Updates', label: 'Always Up To Date', icon: Cloud },
] as const;`);

// ensure Zap and Cloud are imported
if (!c.includes('Zap,')) {
    c = c.replace('import {', 'import {\n  Cloud,\n  Zap,');
}

fs.writeFileSync('src/data/camstore.ts', c);
