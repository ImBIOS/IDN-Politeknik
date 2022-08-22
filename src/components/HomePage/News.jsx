import React from 'react'
import CardNews from './CardNews';

const News = () => {

	const posts = [
		{ title: "Post Satu", desc: "ini description", user: "Ijlal", latestDate: "10 Agustus 2022", major: "Programming", },
		{ title: "Post Dua", desc: "ini description kedua", user: "Ijlal", latestDate: "12 Agustus 2022", major: "Programming", },
		{ title: "Post Tiga", desc: "ini description ketiga", user: "Ijal", latestDate: "14 Agustus 2022", major: "Network Enginering", },
		{ title: "Post Empat", desc: "ini description keempat", user: "Izzy", latestDate: "16 Agustus 2022", major: "Designer", },
		{ title: "Post Lima", desc: "ini description kelima", user: "Ikhsan", latestDate: "18 Agustus 2022", major: "Programming", },
		{ title: "Post Enam", desc: "ini description keenam", user: "Iguana", latestDate: "20 Agustus 2022", major: "Programming", },
	]

	return (
		<article>

			<h1 className='text-2xl text-center pt-10 font-bold text-white'>Blog posts</h1>
			<div className='mx-auto border-2 border-slate-400 w-24 rounded mt-1 mb-5'></div>

			<div className='flex content-center justify-center flex-wrap min-h-screen mb-40'>
				{
					posts.map((post, index) => {
						return (
							<div key={index + 1} data-aos="fade-in" className='m-1 lg:m-10'>
								<CardNews title={post.title} desc={post.desc} user={post.user} latestDate={post.latestDate} major={post.major} />
							</div>
						)
					})
				}
			</div>
		</article>


	);
}
export default News;