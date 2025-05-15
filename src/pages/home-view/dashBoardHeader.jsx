import React from 'react'
import menuImg from '../../assets/menu-bar.png'

function DashBoardHeader() {
  return (
    <header className='flex fixed items-center flex-row justify-between h-40 start-0 w-full z-10 shadow-md top-0 bg-red-700'>
    <div>
        <img className='lg:w-30 sm:w-25' src={menuImg} alt='' />
    </div>

    <div className=''>
    <h1 className="text-3xl text-start font-bold  mb-4">
            <span className="text-black text-center font-extrabold text-5xl">X</span>
            <span className="text-white  font-bold text-3xl">CHANGEPAY</span>
            <span className="text-white bg-[#6b0000] font-bold ml-2 px-2 py-1 rounded">
              GLOBAL
            </span>
          </h1>
        
    </div>
    <div> </div>

    </header>
  )
}

export default DashBoardHeader