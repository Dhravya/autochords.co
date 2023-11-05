'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

function LogoutButton() {
  return (
    <button className=' w-full h-full justify-start items-start text-start' onClick={() => signOut()}>Logout</button> 
  )
}

export default LogoutButton