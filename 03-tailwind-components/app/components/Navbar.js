// Reusable Navbar component
// Uses Tailwind CSS for styling
// DaisyUI provides pre-built component classes

import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          🚀 MySaaS
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <Link href="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link href="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  )
}