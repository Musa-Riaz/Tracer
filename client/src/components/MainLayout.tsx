import React from 'react'
import Navigation from './Navigation'
const MainLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div className='flex h-full  dar:bg-[#1f1f1f]'>
        <Navigation />
        <main className='flex-1 h-full overflow-y-auto'>
        {children}
        </main>
    </div>
  )
}

export default MainLayout
