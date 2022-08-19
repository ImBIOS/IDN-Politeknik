import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import News from '../components/HomePage/News'
import Footer from '../components/Footer'


function Home() {
	return (
		<>
      <Navbar />
      <Hero />
      <News />
      <Footer />
    </>
	)
}

export default Home