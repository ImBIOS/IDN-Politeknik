import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import News from '../components/HomePage/News'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
      </main>
      <Footer />
    </>
  )
}
export default Home