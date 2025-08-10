import React, { Suspense, use, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { NavLink, useLoaderData } from 'react-router';
import Stats from '../Components/Stats';
import { MdArrowForwardIos } from "react-icons/md";
import { AuthContext } from '../Contexts/AuthContext';
import TutorCard from './TutorCard';
import axios from 'axios';
import Featured_tutorCard from './Featured_tutorCard';

const Home = () => {
    const {search,setSearch}=use(AuthContext)
    const [tutors,setTutorial]=useState([])
    const [loading, setLoading] = useState(true);
    
    const handleclick=(language)=>{
        setSearch(language)
    }
    const response=fetch(`${import.meta.env.VITE_API_URL}/users`).then(res=>res.json())
    const res=fetch(`${import.meta.env.VITE_API_URL}/tutorials`).then(res=>res.json())
    
    
     useEffect(() => {
      setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/tutorials`)
      .then((res) => {setTutorial(res.data)
        setLoading(false);
      }
    )
      .catch((err) => console.error("Fetch error:", err));
  }, []);
//     fetch(`${import.meta.env.VITE_API_URL}/tutorials`)
//   .then(res2 => res2.json())
//   .then(data => {
//     setTutorial(data); // <-- Your actual data
//   })
//   .catch(err => console.error(err));
       
    return (
        <div>
            <section className='w-full'>
                <Banner></Banner>
            </section>

            <section className='w-11/12 mx-auto'>
                   <h1 className=' font-bold text-5xl text-center my-10'>Stats section</h1>
                   <div className='flex items-center justify-center'>
                    <Suspense fallback={'Loading data ....'} >
                        <Stats response={response} res={res}></Stats>
                   </Suspense>
                   </div>
                   
                   
            </section>
            <section className='w-11/12 mx-auto'>
                <h1 className=' font-bold text-5xl text-center my-10'>Language Category</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('english')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727896/images_10_yjj8wv.jpg" alt="english" />
                    <h1>English language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('bangla')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754728350/pngtree-bangladesh-round-flag-with-transparent-vector-png-image_10501632_oiddzo.png" alt="english" />
                    <h1>Bangla language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('chienese')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754728273/round-flag-of-china-illustration-vector_ngld4t.jpg" alt="english" />
                    <h1>Chienese language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('portuguese')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754807174/images_4_di1bpz.jpg" alt="english" />
                    <h1>Portuguese language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('german')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727896/germany_640_qcsbyy.png" alt="german" />
                    <h1>German language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('hindi')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727897/india_640_uvi7hm.png" alt="hindi" />
                    <h1>Hindi language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('italian')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754728273/italy_640_naxiqo.png" alt="italian" />
                    <h1>Italian language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('greek')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754728273/greece_640_ir8tfi.png" alt="greek" />
                    <h1>Greek language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('french')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754727894/france_640_kzafjg.png" alt="french" />
                    <h1>French language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                
                </div>
                
            </section>
            <section className='w-11/12 mx-auto'>
                <h1 className='font-bold text-5xl text-center my-10'>Featured Tutorials</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        tutors.slice(0, 8).map(tutor=>(<Featured_tutorCard key={tutor._id} tutor={tutor}></Featured_tutorCard>))
                    }
                </div>
            </section>
            <section className='dark:text-white'>

                <h1 className='font-bold text-5xl text-center my-10'>Members Only</h1>
                <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12  '>
                    <img className='md:w-[300px] ml-30 md:ml-55 lg:ml-0 rounded-2xl' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754746986/member_xfbqff.png" alt="" />
                </div>
                <div className='w-full lg:w-7/12 mx-5 mb-5 flex flex-col lg:items-start items-center'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Member's Benefit</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on a platform for teaching enthusiasts for following benefits</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Share tutorials, find tutors, ask questions any time to a tutor</li>

                      <li>2. Post or join tutorials on the site</li>

                      <li>3. Connect over shared interests in languages</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white lg:ml-40 rounded-2xl btn btn-primary btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>
            </section>

            <section className='w-11/12 mx-auto'>
                <h1 className='font-bold text-5xl text-center my-10'>Promotional Offer</h1>
                <div className='flex flex-col md:flex-row lg:flex-row'>
                    <div className='flex-1'>
                        <img className='h-[300px] w-full' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754746990/pngtree-50-off-blue-text-with-white-circle-background-png-image_6323823_djseqb.png" alt="" />
                    </div>
                    <div className='flex-1 h-[300px] flex flex-col items-center justify-center bg-primary'>
                        <h1 className='text-4xl'>
                            Have 50% off this july
                        </h1>
                        <h1 className='text-3xl'>Register Now</h1>
                    </div>
                </div>
            </section>

            <section className='dark:text-white w-11/12 mx-auto'>
                <h1 className='font-bold text-5xl text-center my-10'>F.A.Q</h1>
                <div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title  font-semibold">How do I get into the community?</div>
  <div className="collapse-content text-sm">Click the "Register" button in the navbar and follow the registration process.</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I cannot find the logout button , where is it?</div>
  <div className="collapse-content text-sm">Check on the top right corner, then click on logout button</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I give my reviews?</div>
  <div className="collapse-content text-sm">Go to mytutors section and click review button, then review will update, if any problem press review another time.</div>
</div>
            </section>
            
        </div>
    );
};

export default Home;