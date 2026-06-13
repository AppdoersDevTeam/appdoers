import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaGlobe, FaUsers } from 'react-icons/fa';
import PageHero from './PageHero';
import PriceAmount from './PriceAmount';
import Protocol from './Protocol';
import AudienceSwitcher from './AudienceSwitcher';
import type { Product } from '../content/siteContent';
import { pricingTiers, products } from '../content/siteContent';
import {
  getAudienceProductCopy,
  isRecommendedPlanForAudience,
} from '../content/audienceContent';
import { useAudienceSegment } from '../context/AudienceSegmentContext';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const icons = {
  basic: <FaGlobe className="text-4xl text-[#1dd3b0]" />,
  full: <FaUsers className="text-4xl text-[#1dd3b0]" />,
};

type ProductDetailPageProps = {
  product: Product;
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const { audienceId } = useAudienceSegment();
  const tier = pricingTiers.find((t) => t.id === product.recommendedTier);
  const otherProduct = products.find((p) => p.slug !== product.slug);
  const planSlug = product.slug as 'basic-website' | 'full-website';
  const copy = getAudienceProductCopy(audienceId, planSlug);
  const recommended = isRecommendedPlanForAudience(audienceId, planSlug);

  usePageMeta({
    title: `${product.title} | Appdoers`,
    description: copy.summary,
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={product.badge}
        title={product.title}
        subtitle={copy.summary}
        primaryCta={{
          label: tier?.cta ?? 'Start Your Project',
          to: `/contact?tier=${product.recommendedTier}`,
        }}
        secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      />

      <section className="py-8 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-3xl">
          <AudienceSwitcher />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {recommended && (
            <MotionReveal className="mb-8 text-center" key={`rec-${audienceId}`}>
              <span className="inline-block text-sm font-bold bg-[#affc41] text-[#3c1642] px-4 py-1.5 rounded-full">
                Best fit for your organisation type
              </span>
            </MotionReveal>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <MotionReveal key={`overview-${audienceId}`}>
                <h2 className="text-2xl font-bold text-[#086375] mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{copy.description}</p>
              </MotionReveal>

              <MotionReveal delay={0.08} key={`highlights-${audienceId}`}>
                <h2 className="text-2xl font-bold text-[#086375] mb-4">What you get</h2>
                <ul className="space-y-3">
                  {copy.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <FaCheck className="text-[#1dd3b0] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
              <div>
                <MotionReveal className="mb-4">
                  <h2 className="text-2xl font-bold text-[#086375]">Deliverables</h2>
                </MotionReveal>
                <Stagger className="grid sm:grid-cols-2 gap-3">
                  {product.deliverables.map((item) => (
                    <StaggerItem key={item} variant="scaleIn">
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700 text-sm border border-gray-100 hover:border-[#1dd3b0]/40 transition-colors duration-300">
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>

            <MotionReveal variant="slideInRight" className="h-fit lg:sticky lg:top-28" key={`aside-${audienceId}`}>
            <aside className="bg-gradient-to-br from-[#3c1642] to-[#086375] rounded-2xl p-8 text-white shadow-xl">
              <div className="mb-6">{icons[product.icon]}</div>
              <p className="text-[#affc41] text-sm font-semibold uppercase mb-2">Ideal for</p>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">{copy.idealFor}</p>
              <p className="text-[#affc41] text-sm font-semibold uppercase mb-2">Pricing</p>
              <p className="text-white font-medium mb-6">{product.tierLabel}</p>
              {tier && (
                <div className="mb-6">
                  <p className="text-lg font-semibold">{tier.name}</p>
                  <p className="text-3xl font-bold mt-1">
                    <PriceAmount
                      value={tier.monthly}
                      showNzd
                      nzdClassName="text-base font-semibold text-white/50 ml-1 align-baseline tracking-wide"
                    />
                    <span className="text-lg font-normal text-white/80">/month</span>
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Setup fee{' '}
                    <PriceAmount
                      value={tier.developmentFee}
                      format="money"
                      nzdClassName="text-[0.65em] font-semibold text-white/40 ml-0.5"
                    />{' '}
                    (from{' '}
                    <PriceAmount
                      value={tier.minDevelopmentPayment}
                      format="money"
                      nzdClassName="text-[0.65em] font-semibold text-white/40 ml-0.5"
                    />{' '}
                    upfront)
                  </p>
                </div>
              )}
              <Link
                to={`/contact?tier=${product.recommendedTier}`}
                className="block w-full text-center bg-[#affc41] text-[#3c1642] font-semibold py-3 rounded-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get started
              </Link>
              <Link
                to="/pricing"
                className="block w-full text-center mt-3 text-white/90 hover:text-white text-sm underline"
              >
                Compare all plans
              </Link>
            </aside>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
        <MotionReveal className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl font-bold text-[#086375] mb-6">Explore our other services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              All services
            </Link>
            {otherProduct && (
              <>
                <span className="text-gray-300">|</span>
                <Link to={otherProduct.href} className="text-gray-600 hover:text-[#086375]">
                  {otherProduct.title}
                </Link>
              </>
            )}
          </div>
        </MotionReveal>
      </section>

      <Protocol />
    </div>
  );
};

export default ProductDetailPage;
