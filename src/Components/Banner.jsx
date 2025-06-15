import React from 'react';

const Banner = () => {
    return (
        <div className='flex'>
            <div className='flex-1 flex flex-col justify-center items-start'>
                <h1 className='font-bold text-7xl'>Hire tutor now</h1>
                <button className='btn btn-accent'>Hire now</button>
            </div>
            <div className='flex-1'>
                <img className='rounded-t-4xl border-bl-blue-500' src="https://i.postimg.cc/MH69T9bb/AP-English-Tutor-1-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;