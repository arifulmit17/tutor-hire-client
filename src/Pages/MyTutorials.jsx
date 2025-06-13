import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import MyTutorialsRow from '../Components/MyTutorialsRow';

const MyTutorials = () => {
    const {user}=use(AuthContext)
    const initialtutorial=useLoaderData()
    const [mytutorial,setMytutorial]=useState(initialtutorial)
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
        initialtutorial.map(tutorial=><MyTutorialsRow key={tutorial._id} mytutorial={mytutorial} setMytutorial={setMytutorial} tutorial={tutorial}></MyTutorialsRow>)
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTutorials;