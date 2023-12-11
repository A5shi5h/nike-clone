import React, { useState } from 'react'
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import {navLinks} from "../Constants"

const Nav = () => {
  const[isMenuOpen , setIsMenuOpen] = useState(false);
   
  const toggleNavBar = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
    <header className='padding-x py-8 absolute z-10 w-full max-md:mt-34'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                 src={headerLogo}
                />
            </a>
            <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                 <li key={item.label}>
                   <a href={item.href}
                   className='font-monts errat loading-normal
                   text-lg text-slate-gray font-semibold hover:text-coral-red'>
                    {item.label}
                   </a>
                 </li>
                ))}
            </ul>
            <div className='hidden max-lg:block' onClick={toggleNavBar}>
                <img
                 src={hamburger}
                 alt='Hamburger'
                 width={25}
                 height={25}
                />
            </div>
        </nav>
        {isMenuOpen && (
          <div>
            <ul className='flex flex-col items-center py-6 gap-4'>
                {navLinks.map((item) => (
                 <li key={item.label}>
                   <a href={item.href}
                   className='font-monts errat loading-normal
                   text-lg text-coral-red font-semibold'>
                    {item.label}
                   </a>
                 </li>
                ))}
            </ul>
          </div>
        )}
    </header>
    </>
  )
}

export default Nav
