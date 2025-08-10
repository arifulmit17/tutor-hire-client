import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyTutorsRows = ({tutor}) => {
    const [tutorial,setTutorial]=useState([])
    let review=tutorial.reviews
    if(review===null){
        review=0
    }
    
    const handleReview=(_id)=>{
        review=parseInt(review)+1
        if(review===null){
        review=0
        }
        const newreviews={reviews: review}

        axios(`${import.meta.env.VITE_API_URL}/tutorials/${_id}`).then(res=>setTutorial(res.data)).catch(error=>console.log(error))

         fetch(`${import.meta.env.VITE_API_URL}/updatetutorialreview/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(newreviews)
                }).then(res=>res.json()).then(data=>{
                    if(data.modifiedCount){
                        Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "reviews updated ,please reload",
                        showConfirmButton: false,
                        timer: 1500
                        });
                    }
                })       
    }
    return (
        <>
             <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={tutor.Image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{tutor.Language}</td>
        <td>{tutor.Price}</td>
        <td>{tutor.TutorEmail}</td>
        <td>{tutorial.reviews}</td>
        <td><button onClick={()=>handleReview(tutor.tutorId)} className='btn btn-primary' >Review</button></td>
      </tr>
        </>
    );
};

export default MyTutorsRows;