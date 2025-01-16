import React from 'react'
import { ArrowRight } from 'lucide-react'
import {Button}  from './ui/button'

const Heading = () => {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents and Plans. Unified. Welcome to <span className='underline'>Tracer</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl'>
        Tracer is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Tracer
        <ArrowRight/>
      </Button>
    </div>
  )
}

export default Heading
