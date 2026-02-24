// This file wraps your entire app
// Every page will use this layout

export const metadata = {
  title: 'My SaaS App',
  description: 'Built with Next.js',
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