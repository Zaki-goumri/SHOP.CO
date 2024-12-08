'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useState } from 'react'
export const Header = () => {
   
const navElements = [
    {
        name: 'products',
        href: '/products'
    },
    {
        name: 'Cart',
        href: '/cart'
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
    
const toggleActiveClass = () => {
    setIsActive(!isActive);}
    const removeActive = () => {
        setIsActive(false)
      }
      
    return (
        <motion.div
        className="flex justify-between items-center py-4 md:px-12 px-3 bg-white shadow-md">
        <Link href="/">
                       
            <Image
             src="/assets/SHOP.CO.svg" alt="SHOP.CO" width={0} height={0} style={{ height: '20px', width: 'auto' }} className='m-0'/>
        </Link>
        <ul className="md:flex space-x-4 gap-8 md:visible  hidden " >
           {navElements.map((element, index) => (
               <li key={index}>
                     <Link href={element.href}>
                        {element.name}
                        </Link>
                        
                </li>
           ))}

        </ul>
        </motion.div>
    )
    }