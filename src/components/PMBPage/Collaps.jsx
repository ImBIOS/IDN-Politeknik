import React from 'react'

function Collaps(props) {
	return (
		<>
			<article tabIndex={props.index} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-h-screen w-full lg:w-1/3 my-12 ">
				<div className="collapse-title text-xl font-medium">
					{props.title}
				</div>
				<div tabIndex={props.index} className="collapse-content"> 
					<p>{props.desc}</p>
				</div>
			</article>
		</>
	)
}

export default Collaps