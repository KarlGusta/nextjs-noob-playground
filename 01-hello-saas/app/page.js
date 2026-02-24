// Welcome to your SaaS journey!
// This is your first Next.js page.
// The mindset: ship fast, not perfect. This page isn't fancy, and that's OK!

export default function HomePage() {
  return (
    <div style={{ 
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>
        🚀 Welcome to Your SaaS Journey!
      </h1>
      
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
        You just created your first Next.js app. This is the foundation of your SaaS product.
      </p>
      
      <div style={{ 
        backgroundColor: '#f0f7ff', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <h2 style={{ marginTop: '0' }}>💡 SaaS Builder Mindset:</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Ship fast, not perfect</strong> - This page is simple, and that's good enough for now</li>
          <li><strong>Code as an entrepreneur</strong> - Focus on solving problems, not perfect code</li>
          <li><strong>Use AI to help</strong> - Don't memorize everything, ask AI when stuck</li>
          <li><strong>Stay motivated</strong> - You're building something real!</li>
        </ul>
      </div>
      
      <p style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#fff3cd',
        borderRadius: '6px'
      }}>
        <strong>Next step:</strong> Try changing the text above and save the file. 
        Your browser will automatically refresh. That's hot reloading in action! ⚡
      </p>
    </div>
  )
}