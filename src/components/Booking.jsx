import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <div className="w-full h-auto pb-36 bg-green-200 text-center">
      <div className='pt-20'>
        <h1 className='font-bold text-xl'>Get Started</h1>
      </div>
      <div className='pt-12'>
        <h1 className='text-5xl'>Ready to join a<br/>Life-Transforming community?</h1>
      </div>
      <div className='pt-24'>
        <Link to="/contact">
          <button className='bg-green-900 pl-20 pr-20 pt-5 pb-5 rounded-lg text-white text-xl font-bold'>Request to join</button>
        </Link>
      </div>
    </div>
  )
}

export default Booking