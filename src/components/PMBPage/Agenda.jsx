import React from 'react'
import Collaps from './Collaps'

function Agenda() {

	const drops = [
		{ title : "Persyaratan Berkas", desc : "ini description", },
		{ title : "Ujian", desc : "ini description kedua", },
	]

	return (
		<>
			<div className='bg-slate-200 dark:bg-slate-800 flex flex-col pb-40 px-10 lg:px-20'>
				<div className='container mx-auto lg:px-16'>
					<div className='pt-24 pb-16 content-end'>
						<h1 className='text-2xl lg:text-4xl'>Persyaratan <span className='font-bold'>Administrasi</span></h1>
						<p>Untuk menjadi Mahasiswa/i Politeknik IDN ada beberapa persyaratan yang harus dipenuhi calon Maba</p>
					</div>
					{
						drops.map((drop, index) => {
							return (
								<Collaps title={drop.title} index={index} desc={drop.desc}/>
							)
					})}
				</div>
			</div>
		</>
	)
}

export default Agenda