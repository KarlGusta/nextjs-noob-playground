import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      
      <div className="py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-base-content/60">Start free. Scale as you grow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            name="Free"
            price={0}
            features={[
              '5 projects',
              'Basic features',
              'Community support'
            ]}
          />
          
          <PricingCard 
            name="Pro"
            price={29}
            isPopular={true}
            features={[
              'Unlimited projects',
              'Advanced features',
              'Priority support',
              'Custom domain'
            ]}
            buttonText="Start Free Trial"
          />
          
          <PricingCard 
            name="Enterprise"
            price={99}
            features={[
              'Everything in Pro',
              'White label',
              'Dedicated support',
              'SLA guarantee'
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </div>
      
      <Footer />
    </>
  )
}