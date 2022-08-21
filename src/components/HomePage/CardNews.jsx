import React from 'react'
import { dummy_5, dummy_6 } from '../Imagesnpm'

const CardNews = (props) => {
    return (
        <>
            <div className="card w-64 sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={ dummy_6 } alt="Shoes" /></figure>
                <div className="dropdown dropdown-end absolute right-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="font-bold pt-2 pb-5">{props.user}</a>
                        </li>
                        <li><a>See more</a></li>
                        <li><a>{props.latestDate}</a></li>
                    </ul>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                    {props.title}
                    </h2>
                    <p>{props.desc}</p>
                    <div className='flex justify-between content-center'>
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={ dummy_5 } />
                            </div>
                        </label>
                        <div className="card-actions justify-center">
                            <div className="badge badge-ghost">{props.latestDate}</div> 
                            <div className="badge badge-outline">{props.major}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNews