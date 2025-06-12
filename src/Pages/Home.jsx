import React, { Suspense, use } from 'react';
import Banner from '../Components/Banner';
import { NavLink } from 'react-router';
import Stats from '../Components/Stats';
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
    const handleclick=(language)=>{
        
        console.log(language);
    }
    const response=fetch(`${import.meta.env.VITE_API_URL}/users`).then(res=>res.json())
       
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section>
                   <h1 className='font-bold text-5xl text-center my-10'>Stats section</h1>
                   <Suspense fallback={'Loading data ....'} >
                        <Stats response={response}></Stats>
                   </Suspense>
                   
            </section>
            <section>
                <h1 className='font-bold text-5xl text-center my-10'>Language Category</h1>
                <div className='grid grid-cols-3 gap-5'>
                    <NavLink to={'/findtutors'}>
<div onClick={()=>handleclick('english')} className='flex  border-2'>
                    <img className='w-5' src="https://i.ibb.co/8D5NmZYp/images-10.jpg" alt="english" />
                    <h1>English language</h1>
                    <MdArrowForwardIos />
                </div>
                    </NavLink>
                
                </div>
                
            </section>
            <section className='dark:text-white'>

                <h1 className='font-bold text-5xl text-center my-10'>Members Only</h1>
                <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12 '>
                    <img className='md:w-[300px] ml-30 rounded-2xl' src="https://i.ibb.co/JXrFNDY/member.png" alt="" />
                </div>
                <div className='w-7/12 mx-5 mb-5'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Member's Benefit</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on a platform for gardening enthusiasts for following benefits</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Share tips, find local gardeners, ask plant care questions any time or on weekly discussions</li>

                      <li>2. Post or join gardening events held on a weekly basis</li>

                      <li>3. Connect over shared interests like composting, hydroponics, balcony gardens</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white lg:ml-40 rounded-2xl btn bg-green-500 btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>
            </section>

            <section className='dark:text-white '>
                <h1 className='font-bold text-5xl text-center my-10'>F.A.Q</h1>
                <div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title  font-semibold">How do I get into the community?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I cannot find the logout button , where is it?</div>
  <div className="collapse-content text-sm">Click on your image at the top right corner and the logout button will appear, then click on logout button</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my tips information?</div>
  <div className="collapse-content text-sm">Go to mytips section and browse to the tip you want to update, click update button, then an update info page will appear and you can update your information.</div>
</div>
            </section>
            
        </div>
    );
};

export default Home;