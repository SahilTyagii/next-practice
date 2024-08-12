'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const SignupPage: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  })

  const onSignup = async () => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-5xl font-extrabold text-gray-400 mb-12'>
        Signup
      </h1>
      <hr />
      <label className='text-gray-300' htmlFor="username">Username</label>
      <input className='p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-600 focus:outline-none text-gray-600' type="text" name="username" id="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder='Username'/>
      <label className='text-gray-300' htmlFor="email">Email</label>
      <input className='p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-600 focus:outline-none text-gray-600' type="text" name="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='Email'/>
      <label className='text-gray-300' htmlFor="password">Password</label>
      <input className='p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-600 focus:outline-none text-gray-600' type="password" name="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='Password'/>
      <button className='py-3 px-4 bg-blue-800 hover:bg-blue-400 rounded-lg' onClick={onSignup}>
        Signup here
      </button>
      <Link href='/login' className='text-gray-400 hover:text-blue-300 mt-4 text-sm'>
          Already have an account? Login here
      </Link>
    </div>
  )
}

export default SignupPage
