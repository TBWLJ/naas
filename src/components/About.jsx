import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='bg-green-900 w-full h-5/6 pe-12 ps-12 py-20 pb-24'>
        <section className='xl:flex lg:flex md:flex sm:block block' data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <div className='xl:ml-32 lg:ml-32 md:ms-16 sm:ms-8 ms-0 pt-16'>
                <img src="naas.png" className='w-96' loading='lazy' alt="naas_logo" />
            </div>
            <div className='flex xl:justify-end lg:justify-end md:justify-center sm:justify-start justify-start pt-10'>
                <h1 className='text-white xl:w-7/12 lg:w-7/12 md:7/12 sm:w-9/12 w-full leading-8 text-justify'>The National Association of Asipa Students (NAAS) is a unifying body committed to fostering academic excellence, cultural heritage, and community development among students of Asipa origin. Through collaboration, empowerment programs, and advocacy, NAAS promotes the welfare, unity, and progress of its members both on campus and beyond.</h1>
            </div>
        </section>
    </section>
  )
}

export default About