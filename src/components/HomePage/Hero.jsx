import React from "react";
import image from "../../asset/Images/profile.jpeg"

const Hero = () => {
	return (
		<article className="container mx-auto hero min-h-screen sm:px-8 relative">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={image} className="max-w-[280px]  sm:max-w-sm rounded-lg shadow-2xl" data-aos="zoom-in" />
				<div className="text-center scale-75 sm:scale-100 md:text-left" data-aos="fade-right">
					<p className="text-5xl font-bold text-blue-900 dark:text-blue-500 font-montserrat">Islamic <br></br> Development Network</p>
					<p className="py-6 lg:pr-56 font-slate-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<button className="btn btn-info text-white rounded-full">see our activities</button>
				</div>
			</div>
		</article>
	)
}

export default Hero;