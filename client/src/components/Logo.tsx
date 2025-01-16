import React from 'react'
import { NotebookPen } from 'lucide-react'
const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <NotebookPen className='h-6 w-6' />
      <p className='font-semibold'>Tracer</p>
    </div>
  )
}

export default Logo
