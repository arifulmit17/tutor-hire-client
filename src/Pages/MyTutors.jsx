import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyTutorsRows from '../Components/MyTutorsRows';

const MyTutors = () => {
    const {user}=use(AuthContext)
    const [tutor,setTutor]=useState([])
    console.log(tutor);
     const token=localStorage.getItem('token');
    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/mytutor/${user?.email}`,{
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
      }, [user])
    
    return (
        <div className=' overflow-x-auto dark:text-white'>
            <table className="table">
    {/* head */}
    <thead>
      <tr className='dark:text-white'>
        <th>Image</th>
        <th>Language</th>
        <th>Price</th>
        <th>Email</th>
        <th>Reviews</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        tutor.map(tutor=><MyTutorsRows key={tutor._id}  tutor={tutor}></MyTutorsRows>)
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTutors;