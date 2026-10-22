import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { policies } from './data/policies';
import { PageMetadata } from './components/legal/PageMetadata';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';

const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServiceShowcase = lazy(() => import('./pages/ServiceShowcase').then(m => ({ default: m.ServiceShowcase })));
const CamBill = lazy(() => import('./pages/CamBill').then(m => ({ default: m.CamBill })));
const CamStore = lazy(() => import('./pages/CamStore').then(m => ({ default: m.CamStore })));
const POSShowcase = lazy(() => import('./pages/POSShowcase').then(m => ({ default: m.POSShowcase })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Vision = lazy(() => import('./pages/Vision').then(m => ({ default: m.Vision })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PurchaseReview = lazy(() => import('./pages/PurchaseReview').then(m => ({ default: m.PurchaseReview })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function App() {
  return (
    <Layout>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<ServiceShowcase service="web-development" />} />
        <Route path="/services/custom-software-development" element={<ServiceShowcase service="custom-software-development" />} />
        <Route path="/services/mobile-android-app-development" element={<ServiceShowcase service="mobile-android-app-development" />} />
        <Route path="/services/consulting-support" element={<ServiceShowcase service="consulting-support" />} />
        <Route path="/products/cambill-pos" element={<CamBill />} />
        <Route path="/products/camstore-pos" element={<CamStore />} />
        <Route path="/products/medibill-pos" element={<POSShowcase product="medibill-pos" />} />
        <Route path="/products/medibill-pro" element={<POSShowcase product="medibill-pro" />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        {policies.map(policy => <Route key={policy.id} path={policy.path} element={<Legal type={policy.id} />} />)}
        <Route path="/cookie-policy" element={<Navigate to="/cookies" replace />} />
        <Route path="/checkout" element={<PurchaseReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
