// Landing page using reusable components
// Clean, organized, easy to maintain

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <div className="py-20 px-4 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Developers Love Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon="⚡"
            title="Lightning Fast"
            description="Built on Next.js 14 with server components for blazing speed"
          />
          <FeatureCard 
            icon="🔒"
            title="Secure by Default"
            description="Authentication, encryption, and best practices built in"
          />
          <FeatureCard 
            icon="💰"
            title="Stripe Payments"
            description="Accept payments and subscriptions out of the box"
          />
        </div>
      </div>
      
      <Footer />
    </>
  )
}