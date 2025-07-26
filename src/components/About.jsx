import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='bg-green-900 w-full h-5/6 pb-5 pe-12 ps-12'>
        <section className='xl:flex lg:flex md:flex sm:block block' data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <div className='xl:ml-32 lg:ml-32 md:ms-16 sm:ms-8 ms-0 pt-16'>
                <img src="naas.png" className=' w-40' loading='lazy' alt="connectpro_logo" />
            </div>
            <div className='flex xl:justify-end lg:justify-end md:justify-center sm:justify-start justify-start pt-10'>
                <h1 className='text-white xl:w-7/12 lg:w-7/12 md:7/12 sm:w-9/12 w-full leading-8 text-justify'>The National Association of Asipa Students (NAAS) is a unifying body committed to fostering academic excellence, cultural heritage, and community development among students of Asipa origin. Through collaboration, empowerment programs, and advocacy, NAAS promotes the welfare, unity, and progress of its members both on campus and beyond.</h1>
            </div>
        </section>
        <div className='xl:flex lg:flex md:flex sm:block block justify-evenly pt-12' data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <Link to="/company">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-green-400 border-green-600 hover:border-yellow-500 border-2 mt-6'>
                    About Us <br/>Who we are
                </aside>
            </Link>
            <Link to="/company#why">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-green-400 border-green-600 hover:border-yellow-500 border-2 mt-6'>
                    Why support us
                </aside>
            </Link>
            <Link to="/solutionn">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-green-400 border-green-600 hover:border-yellow-500 border-2 mt-6'>
                    Our Impact
                </aside>
            </Link>
        </div>
    </section>
  )
}

export default About