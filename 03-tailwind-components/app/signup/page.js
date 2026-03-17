'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    // We'll add real signup in the next lesson!
    console.log('Signup attempt:', { name, email, password })
    alert('Signup coming in Lesson 04!')
  }
  
  return (
    <>
      <Navbar />
      
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="card-title text-3xl font-bold justify-center mb-4">
              Sign Up
            </h2>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Your name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
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
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
            
            <p className="text-center mt-4">
              Already have an account?{' '}
              <Link href="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}