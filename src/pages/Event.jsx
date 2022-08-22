import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClassMeeting from '../components/ClassMeeting'

const EventPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <ClassMeeting />
            </main>
            <Footer />
        </>
    )
}

export default EventPage