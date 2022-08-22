import React from 'react'

function Modal(props) {
	return (
		<>
			<article className='mx-10 relative'>
				<label htmlFor={props.index} className="tracking-wider w-64 btn h-[200px] bg-gradient-to-r from-slate-100 to-slate-200 my-5 text-slate-800 border-none hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">{props.title}
				</label>

				<input type="checkbox" id={props.index} className="modal-toggle" />
				<div className="modal">
					<div className="modal-box relative" >
						<label htmlFor={props.index} className="btn btn-sm btn-circle absolute right-1 top-1 bg-white text-slate-800 border-none hover:text-white hover:bg-gradient-to-r from-sky-500 to-indigo-500" >✕</label>
						<img src={props.image} alt={props.image} />
						<h3 className="text-lg font-bold">{props.title}</h3>
						<p className="py-4">{props.desc}</p>
					</div>
				</div>
			</article>
		</>
	)
}

export default Modal