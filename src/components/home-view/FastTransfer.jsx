import React from 'react'
import phoneImg from '../../assets/phone.png'
function FastTransfer() {
  return (
    <div className='flex  lg:flex-row md:flex-col sm:flex-col   gap-20 items-center justify-center'>
    <div className=''>
    <img className=' sm:w-100 lg:w-120 ' src={phoneImg} />

    </div>
    <div className='block'>
        <div><h2 className='text-blue-500 text-2xl mb-10' > --- FAST TRANSFER</h2></div>
        <h1 className='text-2xl lg:w-[400px] mb-6' >Send Money Anytime, Anywhere In a Minute</h1>
        <p className=' lg:w-[400px] mb-5 text-muted-foreground'>Our local and international money transfer is the very best you can imagine as we
         have provided the very best avenue for you to transfer fund accros countries in minutes 
         and our fund transfer is instantly</p>
         <p className='lg:w-[400px] text-muted-foreground'>With over a million customer, we have stood the test of time and our customers base speaks the volume about us.</p>

    </div>
    </div>
  )
}

export default FastTransfer