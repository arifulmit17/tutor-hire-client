import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const TutorDetails = () => {
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
    const {user,price, image, language, review, description}=tutor
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="tutor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {user}</h2>
    <p>{description}</p>
    <p>Language: {language}</p>
    <p>Price: {price}</p>
    <p>Reviews: {review}</p>

    <div className="card-actions justify-end">
        
<button className="btn btn-primary">Book</button>
       
      
    </div>
  </div>
</div>
    );
};

export default TutorDetails;