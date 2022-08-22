import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Organization from '../components/Organization'

const AcademicPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Organization />
            </main>
            <Footer />
        </>
    )
}

export default AcademicPage