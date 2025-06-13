import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyTutorialsRow from '../Components/MyTutorialsRow';
import axios from 'axios';

const MyTutorials = () => {
    const {user}=use(AuthContext)
    // const initialtutorial=useLoaderData()
    const [tutorials, setTutorials] = useState([])
    const [mytutorial,setMytutorial]=useState(tutorials)
    
  const token=localStorage.getItem('token');
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/mytutorials/${user?.email}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(data => {
        setTutorials(data?.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user])

    return (
        <div className='bg-green-200 overflow-x-auto dark:bg-green-700 dark:text-white'>
            <table className="table">
    {/* head */}
    <thead>
      <tr className='dark:text-white'>
        <th>Image</th>
        <th>description</th>
        <th>Language</th>
        <th>Price</th>
        <th>Reviews</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        tutorials.map(tutorial=><MyTutorialsRow key={tutorial._id} mytutorial={mytutorial} setMytutorial={setMytutorial} tutorial={tutorial}></MyTutorialsRow>)
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTutorials;