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
        <div className=' w-max flex  items-center gap-x-4'>
            <Link href={"/login"}>
                <Button className='inline-flex items-center px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105'>Login</Button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar