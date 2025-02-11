import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#161313]'>
      <Logo />
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
    <Button variant={'ghost'}>
        Privacy Policy
    </Button>
    <Button variant={'ghost'}>
        Terms and Conditions
    </Button>
      </div>
    </div>
  )
}

export default Footer
