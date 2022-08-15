import React from 'react'
import Card from './Card';


const News = () => {
	return (

		<div className="container mx-auto px-8 relative h-[1200px] item-center">
			<div className='m-10 border-b-4'>
				<h1 className="text-center text-4xl font-montserrat font-bold">NEWS</h1>
			</div>

			<Card/>
		</div>
	);
}				
export default News;