import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='flex min-h-screen w-full'>
    <div className='hidden lg:flex items-center justify-center bg-red-500 w-1/3'>

    </div>
    <div className='flex flex-1 items-center justify-start bg-background  sm:px-6 lg:px-0 w-full' >
        <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout