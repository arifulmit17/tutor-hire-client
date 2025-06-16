import axios from 'axios';
import React, {  use, useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';


const TutorDetails = () => {
    const {user}=use(AuthContext)
    const param =useParams()
    const [tutor,setTutor]=useState([])
    const token=localStorage.getItem('token');
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/tutorials/${param.id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(data => {
        setTutor(data?.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [param.id])
    const {price,email, image, language, reviews, description}=tutor
    const newTutor={
        "tutorId": tutor._id,
        "Image":image,
        "Language":language,
        "Price": price,
        "TutorEmail": email,
        "Email":user.email,
    }
    const handleClick=()=>{
        axios.post(`${import.meta.env.VITE_API_URL}/tutor`,newTutor).then(data=>console.log(data.data)).catch(error=>console.log(error))
    }

    return (
        <div className="card card-side lg:flex-row flex-col bg-base-100 shadow-sm">
  <figure>
    <img className='size-20'
      src={image}
      alt="tutor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {tutor.user}</h2>
    <p>{description}</p>
    <p>Language: {language}</p>
    <p>Price: {price}</p>
    <p>Reviews: {reviews}</p>

    <div className="card-actions justify-end">
        
<button onClick={handleClick} className="btn btn-primary">Book</button>
       
      
    </div>
  </div>
</div>
    );
};

export default TutorDetails;