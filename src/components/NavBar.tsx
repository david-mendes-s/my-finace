'use client'
import Link from "next/link"
import { BsBoxArrowInRight, BsFilterLeft, BsGraphUpArrow, BsWallet2 } from "react-icons/bs"

export default function NavBar(){


    return(
        <header className='hidden h-screen w-20 py-6 bg-green-500 dark:bg-[--box-background] sm:flex flex-col items-center'>
          <BsFilterLeft size={35} className='text-[--font-white]' />

          <ul className='list-none my-16'>
            <li className='py-6'>
              <Link href="#">
              
                <BsWallet2 size={24} className='text-[--font-white] dark:text-purple-600' />
              </Link>
            </li>
            <li className='py-6'>
              <Link href="#">
                <BsGraphUpArrow size={24} className='text-[--font-color]' />
              </Link>
            </li>
            
          </ul>
          
          <Link href="#" className='py-5 absolute bottom-[0]'>
            <BsBoxArrowInRight size={24} className='text-white' />
          </Link>
        </header>
    );
    
}