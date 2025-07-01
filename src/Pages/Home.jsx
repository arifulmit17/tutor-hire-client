import React, { Suspense, use } from 'react';
import Banner from '../Components/Banner';
import { NavLink } from 'react-router';
import Stats from '../Components/Stats';
import { MdArrowForwardIos } from "react-icons/md";
import { AuthContext } from '../Contexts/AuthContext';

const Home = () => {
    const {search,setSearch}=use(AuthContext)
    const handleclick=(language)=>{
        setSearch(language)
    }
    const response=fetch(`${import.meta.env.VITE_API_URL}/users`).then(res=>res.json())
    const res=fetch(`${import.meta.env.VITE_API_URL}/tutorials`).then(res=>res.json())
       
    return (
        <div>
            <section className='w-full'>
                <Banner></Banner>
            </section>

            <section>
                   <h1 className='font-bold text-5xl text-center my-10'>Stats section</h1>
                   <div className='flex items-center justify-center'>
                    <Suspense fallback={'Loading data ....'} >
                        <Stats response={response} res={res}></Stats>
                   </Suspense>
                   </div>
                   
                   
            </section>
            <section>
                <h1 className='font-bold text-5xl text-center my-10'>Language Category</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('english')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/9XL9B3nd/images-10.jpg" alt="english" />
                    <h1>English language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('bangla')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/YCmHzqgL/pngtree-bangladesh-round-flag-with-transparent-vector-png-image-10501632.png" alt="english" />
                    <h1>Bangla language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('chienese')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/SN44fpdg/round-flag-of-china-illustration-vector.jpg" alt="english" />
                    <h1>Chienese language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('portuguese')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/ZKJkyxYg/download.jpg" alt="english" />
                    <h1>Portuguese language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('german')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/zBtJtcBV/germany-640.png" alt="german" />
                    <h1>German language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('hindi')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/c1vd0TK7/india-640.png" alt="hindi" />
                    <h1>Hindi language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('italian')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/R0xWnytz/italy-640.png" alt="italian" />
                    <h1>Italian language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('greek')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.postimg.cc/sgMsxcTr/greece-640.png" alt="greek" />
                    <h1>Greek language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                    <NavLink to={'/findtutors'}>
                        <div onClick={()=>handleclick('french')} className='flex h-12 items-center justify-around border-2'>
                    <img className='w-10' src="https://i.ibb.co/jPkTk8R1/france-640.png" alt="french" />
                    <h1>French language</h1>
                    <MdArrowForwardIos />
                         </div>
                    </NavLink>
                
                </div>
                
            </section>
            <section className='dark:text-white'>

                <h1 className='font-bold text-5xl text-center my-10'>Members Only</h1>
                <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12 '>
                    <img className='md:w-[300px] ml-30 rounded-2xl' src="https://i.postimg.cc/zGLdcxJV/member.png" alt="" />
                </div>
                <div className='w-7/12 mx-5 mb-5'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Member's Benefit</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on a platform for teaching enthusiasts for following benefits</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Share tutorials, find tutors, ask questions any time to a tutor</li>

                      <li>2. Post or join tutorials on the site</li>

                      <li>3. Connect over shared interests in languages</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white ml-15 lg:ml-40 rounded-2xl btn btn-primary btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>
            </section>

            <section className='dark:text-white '>
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