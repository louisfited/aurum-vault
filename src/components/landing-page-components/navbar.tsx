import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 py-4'>
        <h1 className='font-semibold'>Aurum</h1>
        <div className='flex gap-x-2'>
            <Button size={"sm"} variant={"outline"} >
                <Link href={"/auth/signin"} >
                Sign In
                </Link>
            </Button>
            <Button size={"sm"} asChild>
                <Link href={"/auth/signup"}>
                Sign Up
                </Link>
            </Button>
        </div>
    </nav>
  )
}

export default Navbar