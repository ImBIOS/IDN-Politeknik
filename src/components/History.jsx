import React from 'react'
import icon from '../asset/Icons/shooping.png'

function History() {
	return (
		<>
			<div className='p-20 bg-sky-800 text-slate-800'>
				<h1 className="text-4xl font-semibold tracking-wides text-slate-800">History IDN Campus</h1>
				<div className="border-2 w-28 rounded my-2"></div>
				<div className='flex items-center'>
						<div>
								<p className='py-5'>Sekolah SMP dan SMK IDN berada dibawah Yayasan IDN dengan pembina bapak Dedi Gunawan, MT, CCIE. SMP dan SMK IDN memiliki keunggulan utama di bidang IT (teknologi informasi) yang mengacu pada kebutuhan industri IT Internasional. setiap anak terutama untuk jenjang SMK akan disiapkan untuk memiliki skill dan sertifikasi untuk berkiprah di dunia internasional.</p>
								<p className='py-5'>SMP dan SMK IDN disupport oleh IDN/ ID-Network dan Imastudio yang memiliki banyak client di asia, eropa, afrika, serta middle east sehingga dengan pengalaman tersebut kami mencoba turun ke dunia pendidikan untuk dapat menarik lebih banyak lagi orang-orang indonesia agar dapat berkancah di dunia internasional.</p>
								<p className='py-5'>Selain pendidikan formal, kami juga menerapkan pendidikan diniyah berdasarkan pemahaman alquran dan sunnah, sehingga selain membangun kompetensi santri di bidang IT juga membangun diniyah mereka.</p>
						</div>
						<img src={icon} alt="" />
				</div>

				<h5 className='font-semibold text-xl'>Tim Pengajar Sekolah SMP-SMK IDN</h5>
				<ul className='list-disc'>
						<li>
								<p className='py-1'>Tim Pengajar Diniyah dari STDI Imam Syafi’i Jember, LIPIA Jakarta, STAI Assunnah Medan, Sudan University dan Pesantren Sunnah di Indonesia
								</p>
						</li>

						<li>
								<p className='py-1'>Tim Pengajar IT dari ID-Networks, CCIE Expert, MTCINE dan IMAStudio, Google Associate Developer
								</p>
						</li>

						<li>
								<p className='py-1'>Tim Pengajar Inggris Native Speaker dari Amerika dan juga guru-guru dari Kampung Inggris Pare Kediri <br /> Serta tim pengajar/guru/asatdiz lainnya
								</p>
						</li>
				</ul>
			</div>
		</>
	)
}

export default History