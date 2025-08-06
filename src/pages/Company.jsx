import React from 'react'
import Boards from '../components/Boards'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WhyWorkWithUs from '../components/WhyWorkWithUs'

const Company = () => {
    return (
        <>
            <div className="mt-32 text-center">
                <h1 className='text-4xl font-bold'>Mission and Vision Statements</h1>
            </div>
            <section className="pt-14">
                <div className="w-full h-auto px-4 py-8 lg:px-24 bg-white border-y-2 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 font-bold text-xl">Our Mission Statement</div>
                    <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 lg:text-left text-justify">
                    To provide a platform for students to grow, learn, and thrive, by fostering academic excellence, promoting leadership development, and encouraging community engagement, while advocating for student welfare and interests.
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-8 lg:px-24 bg-green-100 border-y-2 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 font-bold text-xl">Our Vision</div>
                    <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 lg:text-left text-justify">
                    To  empower students to achieve academic excellence, foster leadership, and promote holistic development, while cultivating a sense of community and social responsibility, thereby producing well-rounded individuals who positively impact society.

                    </div>
                </div>
            </section>
            <div className="mt-32 mb-32 text-center">
                <h1 className='text-4xl font-bold'>The Executives</h1>
            </div>
            <Boards />
            {/* <WhyWorkWithUs /> */}
            <Booking />
            <Footer />
            <BackToTop />
        </>
    )
}


export default Company