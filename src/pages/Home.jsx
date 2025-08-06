import React from 'react'
import TypeError from '../components/Typewriter'
import About from '../components/About'
import Solutionn from '../components/Solutionn'
import Testimony from '../components/Testimony'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import { FaWhatsapp } from 'react-icons/fa';
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
        {/* <Motto/> */}
        <TypeError />
        <About />
        <Solutionn />
        {/* <Services /> */}
        {/* <Partner /> */}
        <Testimony />
        <Booking />
        <Footer />
        <div className="landing-page">
          <a
            href="https://wa.me/2347037488314"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <FaWhatsapp size={40} color="#25D366" />
          </a>
        </div>
        <BackToTop />
    </div>
  )
}

export default Home