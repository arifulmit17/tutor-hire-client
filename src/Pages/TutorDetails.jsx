import React from 'react';
import { useLoaderData } from 'react-router';

const TutorDetails = () => {
    const tutorData=useLoaderData()
    const {_id,user,price, image, language, review, description}=tutorData
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Movie" />
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