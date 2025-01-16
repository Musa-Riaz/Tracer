import React from 'react'
import useScrollTop from '../hooks/use-scroll-stop'
import { cn } from '../lib/utils';
import Logo from './Logo';
import { ModeToggle } from './mode-toggle';
const Navbar = () => {
    const scrolled = useScrollTop();
  return (
    <div className={cn("z-index bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && " border-b shadow-sm"
    )}>
      <Logo />
        
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        Login
        <ModeToggle />
      </div>
     
    </div>
  )
}

export default Navbar
