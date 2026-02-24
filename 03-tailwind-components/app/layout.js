import './globals.css'

export const metadata = {
  title: 'MySaaS - Professional SaaS Product',
  description: 'Built with Next.js, Tailwind CSS, and DaisyUI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}