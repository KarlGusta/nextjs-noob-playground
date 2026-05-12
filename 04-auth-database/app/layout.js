import './globals.css'
import { SessionProvider } from './components/SessionProvider'

export const metadata = {
  title: 'MySaaS - Auth & Database',
  description: 'Full authentication with NextAuth and MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}