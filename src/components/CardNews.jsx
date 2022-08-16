import React from 'react'

const CardNews = (props) => {
    return (
        <>
            <div className="card w-64 sm:w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="dropdown dropdown-end absolute right-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNews