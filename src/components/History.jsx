import React from 'react'
import icon from '../asset/Icons/shooping.png'

function History() {
	return (
		<>
			<div className='p-20 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'>
				<div className='mb-10 mt-5 lg:text-start text-center'>
					<h1 className="lg:text-4xl sm:text-3xl text-xl font-semibold tracking-wides text-slate-900 dark:text-slate-100">History IDN Campus</h1>
					<div className="border-2 w-28 lg:mx-0 mx-auto rounded my-5"></div>
				</div>
				<div className='flex items-center lg:justify-start justify-center lg:flex-nowrap flex-wrap'>
					<div className='lg:order-1 order-2 md:text-lg text-sm'>
						<p className='py-5'>Sekolah SMP dan SMK IDN berada dibawah Yayasan IDN dengan pembina bapak Dedi Gunawan, MT, CCIE. SMP dan SMK IDN memiliki keunggulan utama di bidang IT (teknologi informasi) yang mengacu pada kebutuhan industri IT Internasional. setiap anak terutama untuk jenjang SMK akan disiapkan untuk memiliki skill dan sertifikasi untuk berkiprah di dunia internasional.</p>
						<p className='py-5'>SMP dan SMK IDN disupport oleh IDN/ ID-Network dan Imastudio yang memiliki banyak client di asia, eropa, afrika, serta middle east sehingga dengan pengalaman tersebut kami mencoba turun ke dunia pendidikan untuk dapat menarik lebih banyak lagi orang-orang indonesia agar dapat berkancah di dunia internasional.</p>
						<p className='py-5'>Selain pendidikan formal, kami juga menerapkan pendidikan diniyah berdasarkan pemahaman alquran dan sunnah, sehingga selain membangun kompetensi santri di bidang IT juga membangun diniyah mereka.</p>
						<h5 className='font-semibold lg:text-xl text-lg'>Tim Pengajar Sekolah SMP-SMK IDN</h5>
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
					<img src={icon} alt="Icon" className="lg:w-full w-64 lg:order-2 order-1 dark:bg-slate-200 dark:rounded-lg dark:ml-2" />
				</div>


			</div>
		</>
	)
}

export default History