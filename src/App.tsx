import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Vision } from './pages/Vision';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ProductOverview } from './pages/ProductOverview';
import { Legal } from './pages/Legal';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/cambill-pos" element={<ProductDetail />} />
        <Route path="/products/camstore-pos" element={<ProductOverview />} />
        <Route path="/products/medibill-pos" element={<ProductOverview />} />
        <Route path="/products/medibill-pro" element={<ProductOverview />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal type="privacy" />} />
        <Route path="/terms" element={<Legal type="terms" />} />
        <Route path="/cookies" element={<Legal type="cookies" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
