// About page - tell your story!
// People buy from people they trust

import Link from 'next/link'

export default function AboutPage() {
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
      
      {/* About Content */}
      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto',
        padding: '80px 50px'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '30px' }}>
          About MySaaS
        </h1>
        
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#333' }}>
          We started MySaaS because we were frustrated with complex, expensive tools 
          that took forever to set up. We wanted something simple, fast, and affordable.
        </p>
        
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#333' }}>
          Built by indie hackers who understand the struggle of launching products 
          with limited resources. We ship fast, listen to feedback, and improve daily.
        </p>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '12px',
          marginTop: '40px'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
            Make it dead simple for anyone to build and launch their SaaS product. 
            No PhD required. No venture capital needed. Just you, your idea, and our tools.
          </p>
        </div>
        
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            Ready to start building?
          </p>
          <Link href="/pricing">
            <button style={{
              padding: '15px 40px',
              fontSize: '18px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              View Pricing
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}