'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Header = () => {
   
const navElements = [
      {
        name: 'Home',
        href: '/'
      }, 
  {
        name: 'products',
        href: '/products'
    },
    {
        name: 'Cart',
        href: '/home/cart'
    },
    {
        name: 'Sign In',
        href: '/signin'
    },
    {
        name: 'Sign Up',
        href: '/signup'
    },
    
]
const [isActive, setIsActive] = useState(false);
    


    return (
       <main className='flex flex-col'>
         <div
        className="flex justify-between items-center py-4 md:px-12 px-3 bg-white shadow-md w-screen">
        <Link href="/">
                       
            <Image
             src="/assets/SHOP.CO.svg" alt="SHOP.CO" width={0} height={0} style={{ height: '20px', width: 'auto' }} className='m-0'/>
        </Link>
        <ul className="md:flex space-x-4 gap-8  " >
           {navElements.map((element, index) => (
               <li key={index} className='lg:inline hidden'>
                     <Link href={element.href}>
                        {element.name}
                        </Link>   
                 </li>
           ))}
        </ul>
            {/* <ThemeToggle /> */}
            <button
            //   variant="ghost"
            //   size="icon"
              onClick={() => {
                setIsActive(!isActive)
                document.body.style.overflow = isActive ? 'auto' : 'hidden'
              }
              }
              className=" items-center lg:hidden"
            >
              {isActive ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        {/* Mobile menu */}
     
        </div>
        {isActive && (
        <div className="lg:hidden h-screen ">
          <ul className="flex flex-col items-center mt-7 gap-6">
            {navElements.map((item) => (
             <li   key={item.href}>
                 <a
                href={item.href}
                className=""
                onClick={() => setIsActive(!isActive)}
              >
                {item.name}
              </a>
             </li>
            ))}
          </ul>
        </div>
      )}
       </main>
    )
    }