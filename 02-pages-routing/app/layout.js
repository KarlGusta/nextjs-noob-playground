export const metadata = {
  title: 'MySaaS - Build Your Dream Product',
  description: 'Simple, affordable SaaS tools for entrepreneurs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}