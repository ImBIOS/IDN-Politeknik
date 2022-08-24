import React from 'react'

const Card = (props) => {
    return (
        <div className="card md:w-1/2 w-full bg-base-100 py-5 text-slate-800 dark:text-slate-300">
            <figure><img src={props.image} alt="Shoes" className='w-24' /></figure>
            <div className="card-body text-center">
                <h2 className="font-semibold text-2xl">{props.title}</h2>
                <p className='py-3 text-[14px]'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card