import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='z-100 w-full flex justify-evenly'>
        <div className='h-fit  w-4/12'>
            <Image src="/2.png" alt='logo' height="200" width="200"/>
        </div>
        <div className=' w-3/12 flex  items-center gap-x-4'>
            <Link href={"/login"}>
                <Button className='inline-flex items-center px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105'>Login</Button>
            </Link>
            <Link href={"/"}>
                <Button className='inline-flex items-center px-8 py-3 bg-white text-green-900 dark:text-green-50 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm'>Get Started</Button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar