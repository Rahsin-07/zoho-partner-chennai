import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBrands from '@/components/TrustedBrands'
import Journey from '@/components/Journey'
import Problem from '@/components/Problem'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import ZohoProducts from '@/components/ZohoProducts'
import DeveloperHire from '@/components/DeveloperHire'
import CustomBuild from '@/components/CustomBuild'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import DiscoveryCall from '@/components/DiscoveryCall'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata = {
  title: 'ZoFlowX | Best Zoho Partner in Chennai, India',
  description:
    'Top-rated Certified Zoho Partner in Chennai, India. ZoFlowX delivers Zoho CRM, Books & workflow automation for startups to enterprises. Get your free demo today!',
  alternates: { canonical: 'https://zoflowx.com/zoho-partner-chennai' },
  openGraph: {
    title: 'ZoFlowX | Best Zoho Partner in Chennai, India',
    description:
      'Certified Zoho Authorized Partner in Chennai. Implementation, customization, migration & managed services for businesses across Tamil Nadu and India.',
    url: 'https://zoflowx.com/zoho-partner-chennai',
    type: 'website',
  },
}

export default function ChennaiPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Journey />
        <Problem />
        <WhyUs />
        <Process />
        <Services />
        <Industries />
        <ZohoProducts />
        <DeveloperHire />
        <CustomBuild />
        <CaseStudies />
        <Testimonials />
        <DiscoveryCall />
        <Resources />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
