// This is the home page (landing page)
// Every SaaS needs: Home, Pricing, About
// Let's build the structure!

import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Simple Navigation */}
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
      
      {/* Hero Section */}
      <div style={{ 
        padding: '100px 50px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Build Your Dream SaaS 🚀
        </h1>
        <p style={{ fontSize: '20px', color: '#666', marginBottom: '30px' }}>
          The easiest way to launch your product and make money online.
        </p>
        <button style={{
          padding: '15px 40px',
          fontSize: '18px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Get Started Free
        </button>
      </div>
      
      {/* Features */}
      <div style={{ padding: '80px 50px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '50px' }}>
          Why Choose Us?
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚡</div>
            <h3>Lightning Fast</h3>
            <p style={{ color: '#666' }}>Built with Next.js for incredible speed</p>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔒</div>
            <h3>Secure</h3>
            <p style={{ color: '#666' }}>Your data is safe with us</p>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>💰</div>
            <h3>Affordable</h3>
            <p style={{ color: '#666' }}>Start free, scale as you grow</p>
          </div>
        </div>
      </div>
    </div>
  )
}