import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import FastTransfer from './FastTransfer'
import Services from './Services'
import Speciality from './Speciality'

function GlobalHome() {
  return (
    <div className='flex gap-4 items-center flex-col w-full'>
    <section id='hero' className='w-full h-[600px] bg-cover ' >
    <Hero />
    </section>
    <section id="features" className="w-full bg-white py-12 px-6">
        <Features />
    </section>
    <section className='bg-blue-50 items-center px-10 w-full'> <FastTransfer />  </section>
    <section className='bg-white px-10 w-full'> <Services />  </section>
    <section className='bg-blue-50 px-10 w-full'> <Speciality />  </section>
      
    </div>
  )
}
export default GlobalHome