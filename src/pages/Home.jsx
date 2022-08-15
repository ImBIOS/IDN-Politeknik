import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import News from '../components/News'
import Footer from '../components/Footer'


function Home() {
	return (
		<>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <News />
      </div>
      <Footer />
    </>
	)
}

export default Home