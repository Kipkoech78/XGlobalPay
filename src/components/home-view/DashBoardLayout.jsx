import DashBoardHeader from '@/pages/home-view/dashBoardHeader'
import React from 'react'

function DashBoardLayout() {
  return (
    <div >
    <DashBoardHeader />
    <div className="h-42"></div>
    <section>
    {/* Overlapping Card */}
    <div className="relative w-full z-60 flex justify-center mt-[-60px]">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6">
          {/* Card content */}
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Welcome Kipkoech, Mibei
          </h2>
          <p className="text-sm text-gray-500">Available Balance</p>
          <p className="text-3xl font-bold text-gray-800">USD 0.00</p>

        </div>
      </div>

    </section>
    </div>
  )
}

export default DashBoardLayout