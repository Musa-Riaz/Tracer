import * as React from 'react';
import Navbar from './Navbar';


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full dark:bg-[#161313]'>
        <Navbar />
      <main className='h-full pt-40'>
        {children}
      </main>
    </div>
  )
}

export default Layout
