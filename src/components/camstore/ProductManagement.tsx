import { CAMSTORE_IMAGES, productFormFields } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const fieldNames = productFormFields.map((f) => f.label);

export function ProductManagement() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-products-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-products-title"
            align="center"
            eyebrow="Product Management"
            title="Manage Cameras, Lenses & Accessories"
            copy="Capture everything that matters about a product once, then reuse it across billing, purchasing, and reports."
          />
        </Reveal>

        <div className="cs-two cs-two--media-wide cs-two--center">
          <Reveal className="cs-two__media" delay={0.05}>
            <BrowserFrame title="CamStore POS — Products">
              <AppScreen id="products" />
            </BrowserFrame>
          </Reveal>

          <Reveal className="cs-two__copy" delay={0.08}>
            <figure className="cs-photo cs-photo--light">
              <img
                src={CAMSTORE_IMAGES.cameraGear}
                alt="Mirrorless camera with lenses, tripod, camera bag, memory cards and battery laid out on a white surface"
                width={1200}
                height={896}
                loading="lazy"
              />
            </figure>
            <ul className="cs-tags" aria-label="Product fields tracked">
              {fieldNames.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
