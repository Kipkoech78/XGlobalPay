import React from 'react'
import serviceImg from '../../assets/services.png'
function Services() {
  return (
    <div className='flex lg:flex-row sm:flex-col items-center justify-end gap-17' >
    <div className='items-start '>
    <h1 className='text-blue-600 text-2xl mb-5'> --- Best Service</h1>
    <h2 className='text-3xl mb-5'>Why we stand out</h2>
    <p className='lg:w-150 text-start text-muted-foreground mb-5 sm:w-full' >With over 160 years of investment experience and $1.7 trillion in assets under
     management Footnote, access the world-class investment expertise of Xchangepayglobal to help
      you meet your important financial goals.</p>
      <p className='text-muted-foreground lg:w-150 sm:w-full'>We ensure you exprerience the very best of internet banking ever provided by any financial institution.</p>

    </div>
    <div>
    <img className='w-full' src={serviceImg} alt='' />
    </div>
    </div>
  )
}

export default Services