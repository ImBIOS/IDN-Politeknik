import React from 'react';
import Card from './Card';
import logo1 from '../asset/Icons/handshake 1.png';
import logo2 from '../asset/Icons/public-speaking 1.png'
import logo3 from '../asset/Icons/imac 1.png'
import logo4 from '../asset/Icons/partners 1.png'

const Organization = () => {
    return (
        <article className="container mx-auto text-slate-800 dark:text-slate-300 mt-20">
            <h1 className='text-center font-bold text-4xl'>Organization</h1>
            <div className="border-2 w-16 mx-auto bg-slate-900 rounded my-2"></div>

            <div className="py-20 flex flex-wrap justify-center">
                <Card image={logo1} className="w-1/2" title={"komunitas IDN peduli"} desc={"Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions."} />

                <Card image={logo2} className="w-1/2" title={"Komunitas dakwah "} desc={"Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions."} />

                <Card image={logo3} className="w-1/2" title={"Computer Sience"} desc={"Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions."} />

                <Card image={logo4} className="w-1/2" title={"Himpunan mahasiswa IDN"} desc={"Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions."} />
            </div>
        </article>
    )
}

export default Organization