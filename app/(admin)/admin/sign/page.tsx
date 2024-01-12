'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {

    const query = `
    query data{
      test
      }
  `


    const { data } = await fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    }).then(v => v.json())

    console.log(data.test)
  }




  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>

    </>
  )
}