import React, { use, useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';

const FindTutors = () => {
   
    const {search,setSearch}=use(AuthContext)
    const [tutorialdata,setTutorialdata]=useState([])
    const [order, setOrder] = useState("asc");
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/tutorials?searchParams=${search}`).then(res=>res.json()).then(data=>
    //         setTutorialdata(data)
    //     )
    // },[search])

  //    useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/tutorials?sortBy=price&order=${order}`)
  //     .then((res) => setTutorialdata(res.data))
  // }, [order]);
     useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/tutorials?order=${order}&search=${search}`)
      .then((res) => setTutorialdata(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, [order,search]);
    
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
<button className='ml-2 btn btn-primary'>Search</button>
            </div>
            <div>
              <select onChange={(e) => setOrder(e.target.value)} value={order}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            </div>

{
            tutorialdata.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
        }
        </div>
        
        
    );
};

export default FindTutors;