import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import limg from '../asset/img1.png'
import rimg from '../asset/img2.png'
import { dmm, rpl, tkj } from '../components/Images'
import Modal from '../components/Modal'



function PMB() {
	return (
		<>
			<Navbar />
			<div className='container mx-auto min-h-screen'>
					<div class="hero min-h-screen">
						<div class="hero-content text-center">
							<div class="max-w-2xl">
								<div className='scale-75 flex'>
									<img src={limg} alt="limg" className='' data-aos="fade-right" data-aos-delay="200"/>
									<img src={rimg} alt="rimg" className=''data-aos="fade-left" data-aos-delay="200"/>
								</div>
								<h1 class="text-5xl font-bold">Penerimaan Mahasiswa Baru Angkatan 6 (2023)</h1>
								<p class="py-6 text-lg">Mari bergabung bersama kami, inilah saatnya anda menjadi keluarga besar IDN</p>
								<button class="btn btn-info text-white">Daftar</button>
							</div>
						</div>
					</div>

					<div>
						<h1 class="text-center text-4xl font-bold" data-aos="fade-in">Program Studi di Politeknik IDN</h1>
						<div className="py-20 flex flex-wrap justify-center">
									<Modal title="Teknik Jaringan Komputer" image={tkj} desc="ini deskripsi" index="1" data-aos="fade-right"/>
									<Modal title="Rekayasa Perangkat Lunak" image={rpl} desc="ini deskripsi" index="2"/>
									<Modal title="Design Multimedia" image={dmm} desc="ini deskripsi" index="3"/>
							</div>
					</div>

					<div className='bg-slate-200 container mx-auto flex flex-col'>
						<div>
							<h1>Persyaratan <span className='bold'>Administrasi</span></h1>
							<p>Untuk menjadi Mahasiswa/i Politeknik IDN ada beberapa persyaratan yang harus dipenuhi calon Maba</p>
						</div>
						<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
							<div class="collapse-title text-xl font-medium">
								Persyaratan Berkas
							</div>
							<div tabIndex="0" class="collapse-content"> 
								
								<p>tabindex="0" attribute is necessary to make the div focusable</p>
							</div>
						</div>
						<div></div>
					</div>
			</div>
			<Footer />
		</>
	)
}

export default PMB