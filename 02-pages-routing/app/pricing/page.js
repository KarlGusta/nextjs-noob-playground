// Pricing page - essential for every SaaS
// This is where you convert visitors to customers!

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        padding: '20px 50px',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
          MySaaS
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
          <Link href="/pricing" style={{ color: '#fff', textDecoration: 'none' }}>
            Pricing
          </Link>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About
          </Link>
        </div>
      </nav>
      
      {/* Pricing Header */}
      <div style={{ 
        padding: '80px 50px 40px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '15px' }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Start free. Upgrade when you're ready.
        </p>
      </div>
      
      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '50px'
      }}>
        {/* Free Plan */}
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '40px 30px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Free</h3>
          <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
            $0<span style={{ fontSize: '18px', fontWeight: 'normal' }}>/mo</span>
          </div>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0', 
            marginBottom: '30px',
            textAlign: 'left',
            lineHeight: '2'
          }}>
            <li>✓ 5 projects</li>
            <li>✓ Basic features</li>
            <li>✓ Community support</li>
          </ul>
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>
        
        {/* Pro Plan */}
        <div style={{
          border: '2px solid #0070f3',
          borderRadius: '12px',
          padding: '40px 30px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '5px 20px',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            POPULAR
          </div>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Pro</h3>
          <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
            $29<span style={{ fontSize: '18px', fontWeight: 'normal' }}>/mo</span>
          </div>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0', 
            marginBottom: '30px',
            textAlign: 'left',
            lineHeight: '2'
          }}>
            <li>✓ Unlimited projects</li>
            <li>✓ Advanced features</li>
            <li>✓ Priority support</li>
            <li>✓ Custom domain</li>
          </ul>
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Start Free Trial
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '40px 30px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Enterprise</h3>
          <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
            $99<span style={{ fontSize: '18px', fontWeight: 'normal' }}>/mo</span>
          </div>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0', 
            marginBottom: '30px',
            textAlign: 'left',
            lineHeight: '2'
          }}>
            <li>✓ Everything in Pro</li>
            <li>✓ White label</li>
            <li>✓ Dedicated support</li>
            <li>✓ SLA guarantee</li>
          </ul>
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}