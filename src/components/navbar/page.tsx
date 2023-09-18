'use client';

import Link from "next/link";
import { signIn } from 'next-auth/react'

export default function Navbar() {
  return (
    <div className="w-full h-10 bg-blue-500 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-end space-x-4 items-center h-full">
          <Link className="text-white" href='/about'> About Us </Link>
          <button onClick={() => signIn()}>Sign in</button>
          {/*<Link className="text-white" href='/login'> Login </Link>*/}
        </div>
      </div>
    </div>
  )
}
