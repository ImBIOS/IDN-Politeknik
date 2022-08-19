import React from 'react'
import limg from '../../asset/img1.png'
import rimg from '../../asset/img2.png'

function HeaderPMB() {
	return (
		<>
			<div class="hero min-h-screen ">
				<div class="hero-content text-center">
					<div class="max-w-2xl">
						<div className='flex justify-center items-start'>
							<img src={limg} alt="limg" className='w-36 lg:w-64' data-aos="fade-right"/>
							<img src={rimg} alt="rimg" className='w-32 lg:w-56' data-aos="fade-left"/>
						</div>
						<h1 class="text-2xl lg:text-5xl font-bold" data-aos="fade-up">Penerimaan Mahasiswa Baru Angkatan 6 (2023)</h1>
						<p class="py-6 text-lg" data-aos="fade-up">Mari bergabung bersama kami, inilah saatnya anda menjadi keluarga besar IDN</p>
						<button class="btn btn-info text-white" data-aos="fade-in">Daftar</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeaderPMB