import React from 'react';
import { NavLink } from 'react-router';

const TutorCard = ({tutor}) => {
    const {_id,user,price, image, language, reviews, description}=tutor
    return (
        <div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-sm">
  <figure>
    <img className='size-[200px]'
      src={image}
      alt="Tutor/Tutorial" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {user}</h2>
    <p>{description}</p>
    <p>Language: {language}</p>
    <p>Price: {price}</p>
    <p>Reviews: {reviews}</p>

    <div className="card-actions justify-end">
        <NavLink to={`/tutordetails/${_id}`}>
<button className="btn btn-primary">Details</button>
        </NavLink>
      
    </div>
  </div>
</div>
    );
};

export default TutorCard;