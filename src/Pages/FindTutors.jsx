import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from './TutorCard';

const FindTutors = () => {
   
    const [search, setSearch]=useState("")
    const [tutorialdata,setTutorialdata]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/tutorials?searchParams=${search}`).then(res=>res.json()).then(data=>
            setTutorialdata(data)
        )
    },[search])

    
    
    return (
        <div>
            <div>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
            </div>

{
            tutorialdata.map(tutor => <TutorCard tutor={tutor}></TutorCard>)
        }
        </div>
        
        
    );
};

export default FindTutors;