import React from 'react'

function Modal(props) {
	return (
		<>
			<div className='mx-10 relative'>
				<label for={props.index} class="tracking-wider w-64 btn min-h-[200px] bg-gradient-to-r from-slate-100 to-slate-200 my-5 text-slate-800 border-none hover:text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500">{props.title}
				</label>

				<input type="checkbox" id={props.index} class="modal-toggle" />
				<div class="modal">
					<div class="modal-box relative" >
						<label for={props.index} class="btn btn-sm btn-circle absolute right-1 top-1 bg-white text-slate-800 border-none hover:text-white hover:bg-gradient-to-r from-sky-500 to-indigo-500" >✕</label>
						<img src={props.image} alt={props.image} />
						<h3 class="text-lg font-bold">{props.title}</h3>
						<p class="py-4">{props.desc}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal