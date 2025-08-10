import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import { Link } from 'react-router';
const Banner = () => {
    return (
        // <div className='flex flex-col lg:flex-row'>
        //     <div className='flex-1 flex flex-col justify-center items-center lg:items-start'>
        //         <h1 className='font-bold text-7xl'>Hire tutor now</h1>
        //         <button className='btn btn-accent'>Hire now</button>
        //     </div>
        //     <div className='flex-1'>
        //         <img className='rounded-t-4xl border-bl-blue-500' src="https://i.postimg.cc/MH69T9bb/AP-English-Tutor-1-1.jpg" alt="" />
        //     </div>
        // </div>
        <div>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img className='h-[300px] lg:h-[400px] ' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727627/AP-English-Tutor-1-1_csstft.jpg" alt="Slide 1" />
        <div className="w-2/3 lg:w-full h-full custom-text-overlay    border border-green-200">
          
          <div className='flex flex-col mt-80 items-center md:items-start lg:items-start'>
            <h2 className="text-white text-4xl mb-3 font-bold">Hire tutor now</h2>
          <Link to={'/register'}>
          <button className='btn btn-primary'>Hire now</button>
          </Link>
          </div>
          
          
        </div>
      </div>
      <div >
        <img className='h-[300px] lg:h-[400px]' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727896/home-tutor-Singapore_rf0da5.jpg" alt="Slide 2" />
        <div className="custom-text-overlay flex flex-col ml-10 items-center md:items-center lg:items-start relative">
          <h2 className="text-white text-4xl mb-3 font-bold">Hire tutor now</h2>
          <Link to={'/register'}>
          <button className='btn btn-primary'>Hire now</button>
          </Link>
        </div>
      </div>
      <div>
        <img className='h-[300px] lg:h-[400px]' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727901/istockphoto-1409994740-612x612_pekpmf.jpg" alt="Slide 3" />
        <div className="custom-text-overlay flex flex-col ml-10 items-center md:items-center lg:items-start relative">
          <h2 className="text-white text-4xl mb-3 font-bold">Hire tutor now</h2>
          <Link to={'/register'}>
          <button className='btn btn-primary'>Hire now</button>
          </Link>
        </div>
      </div>
    </Carousel>
        </div>
    );
};

export default Banner;