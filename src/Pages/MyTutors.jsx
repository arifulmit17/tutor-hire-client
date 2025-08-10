import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyTutorsRows from '../Components/MyTutorsRows';

const MyTutors = () => {
    const {user}=use(AuthContext)
    const [tutor,setTutor]=useState([])
    const[loading,setLoading]=useState(true)
     const token=localStorage.getItem('token');
    useEffect(() => {
      setLoading(true)
        axios(`${import.meta.env.VITE_API_URL}/mytutor/${user?.email}`,{
          headers: {
        Authorization: `Bearer ${token}`,
      }
        })
          .then(data => {
            setTutor(data?.data)
            setLoading(false)
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
      { loading ? (<div className="flex justify-center items-center my-10">
      <span className="loading loading-spinner loading-lg"></span>
    </div>) :
        (tutor.map(tutor=><MyTutorsRows key={tutor._id}  tutor={tutor}></MyTutorsRows>))
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTutors;