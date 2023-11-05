'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

function LoginButton() {
  return (
    <button onClick={() => signIn('google')}>Login</button>
  )
}

export default LoginButton
