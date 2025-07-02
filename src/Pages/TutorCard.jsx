import React from 'react';
import { NavLink } from 'react-router';

const TutorCard = ({tutor}) => {
    const {_id,user,price, image, language, reviews, description}=tutor
    return (
        <div className="card card-side bg-secondary mx-auto w-1/2 flex flex-col my-5 lg:flex-row shadow-sm">
  <figure className='w-full lg:w-1/3'>
    <img className='w-[200px] h-[200px] rounded-full'
      src={image}
      alt="Tutor/Tutorial" />
  </figure>
  <div className="card-body w-full lg:w-1/2">
    <h2 className="card-title">Name : {user}</h2>
    <p><span className='font-bold'>Description:</span> {description}</p>
    <p><span className='font-bold'>Language:</span> {language}</p>
    <p><span className='font-bold'>Price:</span>  {price}</p>
    <p><span className='font-bold'>Reviews:</span> {reviews}</p>

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