'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    // We'll add real authentication in the next lesson!
    console.log('Login attempt:', { email, password })
    alert('Authentication coming in Lesson 04!')
  }
  
  return (
    <>
      <Navbar />
      
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="card-title text-3xl font-bold justify-center mb-4">
              Login
            </h2>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <Link href="/signup" className="link link-primary">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}