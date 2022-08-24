import React from 'react'
import { dmm, rpl, tkj } from '../Images'
import Modal from './Modal'

function Prodi() {

	const majors = [
		{ title: "Teknik Jaringan Komputer", desc: "ini description", img: { dmm } },
		{ title: "Rekayasa Perangkat Lunak", desc: "ini description kedua", img: { rpl } },
		{ title: "Design Multimedia", desc: "ini description ketiga", img: { tkj } },
	]

	return (
		<>
			<div className='min-h-screen flex flex-col content-center justify-center'>
				<h1 class="text-center text-2xl lg:text-4xl font-bold" data-aos="fade-in">Program Studi di Politeknik IDN</h1>
				<div className="py-20 flex flex-wrap justify-center">
					{
						majors.map((major, index) => {
							return (
								<div data-aos="fade-in" className=''>
									<Modal title={major.title} image={major.img} desc="desc" key={index + 1} />
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default Prodi