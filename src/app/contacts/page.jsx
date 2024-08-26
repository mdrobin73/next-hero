import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] })

const getTime = async () => {
    // const res = await fetch("http://localhost:3000/time", { cache: 'no-store' })
    const res = await fetch("http://localhost:3000/time", { next: {revalidate: 5} })
    const data = await res.json();
    return data.currentTime;
}

const page = () => {

    const currentTime = getTime();

    return (
        <div className={`${headland.className} p-10 `}>
            <h2 className='text-2xl font-semibold text-slate-950'>This is Contact Page</h2>
            <h3 className='text-xl mt-10 text-red-400 border border-2 border-red-400 p-4 w-1/3 bg-slate-50 shadow-lg'><span className='text-slate-950'>Time</span>: {currentTime}</h3>
        </div>
    );
};

export default page;