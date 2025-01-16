import React from 'react'
import { Scroll } from 'lucide-react'


const Heros = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center '>
            <div className='relative w-[300px] h-[300px] sm:w-[350px]
            sm:h-[350px] md:h-[400px] md:w-[400px] flex justify-center items-center'>
                <Scroll height={400} width={400}/>
            </div>
           
      </div>
    </div>
  )
}

export default Heros
