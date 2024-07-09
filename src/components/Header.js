import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';
const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline justify-between px-4 py-2'>
        <h1 className='text-3xl'>Web Tail</h1>
        <FaBarsStaggered className='hidden sm:flex'/>
        <nav className='sm:hidden'>
           <a href='#' className='hover:bg-white hover:text-black px-4 py-2'>About</a>
           <a href='#' className='hover:bg-white hover:text-black px-4 py-2'>Contact</a>
        </nav>
    </header>
  ) 
}

export default Header