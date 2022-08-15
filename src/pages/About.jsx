import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import History from '../components/History'

const AboutPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <Profile />
                <History />
            </div>
            <Footer />
        </>
    )
}

export default AboutPage