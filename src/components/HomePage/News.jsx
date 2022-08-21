import React from 'react'
import CardNews from './CardNews';

const News = () => {

	const posts = [
		{ title : "Post Satu", desc : "ini description", user : "Ijlal", latestDate : "10 Agustus 2022", major : "Programming", },
		{ title : "Post Dua", desc : "ini description kedua", user : "Ijlal", latestDate : "12 Agustus 2022", major : "Programming",},
		{ title : "Post Tiga", desc : "ini description ketiga", user : "Ijal", latestDate : "14 Agustus 2022", major : "Network Enginering", },
		{ title : "Post Empat", desc : "ini description keempat", user : "Izzy", latestDate : "16 Agustus 2022", major : "Designer", },
		{ title : "Post Lima", desc : "ini description kelima", user : "Ikhsan", latestDate : "18 Agustus 2022", major : "Programming", },
		{ title : "Post Enam", desc : "ini description keenam", user : "Iguana", latestDate : "20 Agustus 2022", major : "Programming", },
	]

	return (
		<>
			<h1 className='text-3xl text-center text-slate-900 dark:text-slate-100 my-10 border-2 border-slate-700 p-5 w-1/2 mx-auto rounded-xl hover:bg-sky-900 hover:dark:bg-sky-100 hover:text-white hover:dark:text-black'>Coming soon feautures...</h1>

			<div className='flex content-center justify-center flex-wrap min-h-screen mb-40'>
				{
					posts.map((post, index) => {
						return (
							<div data-aos="fade-in" className='m-1 lg:m-10'>
								<CardNews index={index} title={post.title} desc={post.desc} user={post.user} latestDate={post.latestDate} major={post.major} />
							</div>
						)
					})
				}
			</div>
		</>


	);
}
export default News;