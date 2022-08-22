import React from 'react';
import futsal from '../asset/Icons/futsal.png';
import cooking from '../asset/Icons/cooking.png';
import ngoding from '../asset/Icons/ngoding.png';
import CardEvent from './CardEvent';

const ClassMeeting = () => {
    return (
        <article className="container mx-auto text-slate-800 mt-20 dark:text-white">
            <h1 className='text-center font-bold text-4xl'>class Meeting</h1>
            <div className="border-2 w-16 mx-auto rounded my-2"></div>
            
            <CardEvent image={futsal} title="Futsal" desc="Futsal is an association football-based game played on a hard court smaller than a football pitch, and mainly indoors. It has similarities to five-a-side football and indoor soccer." noName="Zaid Al Maghfur" no="0987763839201" />

            <CardEvent image={cooking} title="Cooking" desc="Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions." noName="Zaid Al Maghfur" no="0987763839201" />

            <CardEvent image={ngoding} title="Ngoding" desc="Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms," noName="Zaid Al Maghfur" no="0987763839201" />

        </article>
    )
}

export default ClassMeeting;