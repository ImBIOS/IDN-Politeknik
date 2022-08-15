import React from 'react';
import logo from '../asset/pakDedi.png'
import { dummy_1, dummy_2, dummy_3 } from './Images';

const Profile = () => {
    return (
        <div className="container mx-auto px-8 py-10">
            <h1 className="text-center text-4xl font-bold tracking-widest text-slate-800">Profile</h1>
            <div className="border-2 w-16 mx-auto rounded my-2 bg-slate-900"></div>

            <div className="Image">
                <div className="grid justify-center grid-rows-3 grid-flow-col gap-x-8 gap-y-4 mt-5">
                    <div className="lg:row-span-3"><img src={dummy_1} alt="" /></div>
                    <div className="lg:col-span-2"><img src={dummy_2} alt="" /></div>
                    <div className="-mt-16 lg:col-span-2"><img src={dummy_3} alt="" /></div>
                </div>
            </div>

            <div className='text-center my-20 tracking-widest text-lg lg:text-2xl'>
                <p >
                    Ini adalah website resmi dari politeknik IDN yang telah kami bikin.
                    Kamu tau gak ? kami bikinnya bertiga lho awokawoawkawokw.
                </p>

                <p>Kamu pengen kayak kami gak ? yaudah join ke RPL. Di TKJ malah jadi
                    pengguli jaringan handal apalagi di DMM malah menjadi yuai/yuex
                    designer. Pdahal gaji yang terbesar itu ada di RPL awkawokaow
                    Meskipun dapat bikin kepala botak awkawoakwokawok</p>

                <p>dan ingat joks dari RPL “Mama aku di render”. awokawok</p>
            </div>

            <div className="px-20 flex justify-center items-center flex-col">
                <h1 className="text-center text-2xl lg:text-4xl font-semibold tracking-wides text-slate-800">Director of education IDN</h1>
                <div className="border-2 w-28 rounded my-2 bg-slate-900"></div>

                <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-0">
                    <div className="avatar">
                        <div className="w-44 rounded-full">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="lg:ml-5 lg:w-1/2 ">
                        <h5 className="mt-5 font-bold text-slate-800 text-center">Deddy Gunawan MT. CCIE,</h5>
                        <p className="py-5 text-slate-600">"Untuk menjadi terlatih tidak ada cara instant, caranya ya hanya harus
                            mau mengulang ulang terus menerus. Kalau nilai diri kita ingin menjadi
                            tinggi, ya harus melatih diri, minimal sampai terlatih. Bukan hanya sekedar
                            bisa, ya harus mengulang"
                            <br />
                            - Pak Dedi Gunawan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile