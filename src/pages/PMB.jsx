import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeaderPMB from '../components/PMBPage/Header'
import Prodi from '../components/PMBPage/Prodi'
import Agenda from '../components/PMBPage/Agenda'



function PMB() {
	return (
		<>
				<Navbar />
				<main className='dark:text-white'>
					<HeaderPMB />
					<Prodi />
					<Agenda />
				</main>
				<Footer />
		</>
	)
}

export default PMB