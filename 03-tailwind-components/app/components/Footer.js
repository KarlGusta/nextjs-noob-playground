// Footer component
// Keep it simple - links, social, copyright

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">About</Link>
        <Link href="/pricing" className="link link-hover">Pricing</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
        <Link href="/privacy" className="link link-hover">Privacy</Link>
      </nav>
      
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">GitHub</a>
          <a className="link link-hover">Discord</a>
        </div>
      </nav>
      
      <aside>
        <p>Copyright © 2024 - Built with Next.js</p>
      </aside>
    </footer>
  )
}