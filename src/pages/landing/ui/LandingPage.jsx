import { Header } from '../../../widgets/header'
import { Hero } from '../../../widgets/hero'
import { Benefits } from '../../../widgets/benefits'
import { HowItWorks } from '../../../widgets/how-it-works'
import { ProductShowcase } from '../../../widgets/product-showcase'
import { Testimonials } from '../../../widgets/testimonials'
import { Pricing } from '../../../widgets/pricing'
import { Faq } from '../../../widgets/faq'
import { FinalCta } from '../../../widgets/final-cta'
import { Footer } from '../../../widgets/footer'

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <ProductShowcase />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
