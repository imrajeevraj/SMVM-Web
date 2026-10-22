import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Legal } from './pages/Legal';
import { Footer } from './components/layout/Footer';
import { policies, policyMetadata } from './data/policies';
import identity from './config/legal.json';

export function renderPolicies() {
  return {
    origin: identity.websiteUrl,
    archive: { version: identity.policyVersion, identity, policies: policies.map(policy => ({ ...policy, ...policyMetadata(policy) })) },
    pages: policies.map(policy => ({
      path: policy.path, title: `${policy.title} | ${identity.brandName}`, description: policy.description,
      html: renderToString(<StaticRouter location={policy.path}><div className="smvm-site"><header className="site-container pt-6"><a href="/">SMVM Softwares</a> · <a href="/contact">Contact</a></header><main id="main-content"><Legal type={policy.id} /></main><Footer /></div></StaticRouter>),
    })),
  };
}
