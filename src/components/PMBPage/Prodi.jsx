import React from 'react'
import { dmm, rpl, tkj } from '../Images'
import Modal from './Modal'

function Prodi() {

	const majors = [
		{ title : "Teknik Jaringan Komputer", desc : "ini description", img : dmm },
		{ title : "Rekayasa Perangkat Lunak", desc : "ini description kedua", img : rpl },
		{ title : "Design Multimedia", desc : "ini description ketiga", img : tkj },
	]

	return (
		<>
			<article className='min-h-screen flex flex-col content-center justify-center'>
				<div className='p-5'>
					<h1 className="text-center text-2xl lg:text-4xl font-black" data-aos="fade-in">Program Studi di Politeknik IDN</h1>
				</div>
				<div className="py-20 flex flex-wrap justify-center">
					{
						majors.map((major, index) => {
							return (
								<div key={index + 1} data-aos="fade-in">
									<Modal title={major.title} image={major.img} desc="desc"  index={index}/>
								</div>
							)
						})
					}
				</div>
			</article>
		</>
	)
}

export default Prodi