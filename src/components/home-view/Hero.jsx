import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-blue-300 text-center h-full px-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to Xchangepayglobal</h2>
      <p className="text-lg max-w-2xl mb-6">
        Open your Xchangepayglobal Account and make your first direct deposit into this
        account within 60 days. Keep an average beginning day balance of $15,000. We are a bank without border.
      </p>
      <div className="flex gap-10">
        <Button className="w-40 rounded-xl h-[50px] text-xl" variant="ghost">Login</Button>
        <Button  className="w-40 border-2 h-[50px] rounded-2xl text-2xl  border-white hover:bg-white" variant="outlined">Register</Button>
      </div>
    </div>
  );
}
export default Hero