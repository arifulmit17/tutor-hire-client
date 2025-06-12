import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const MyTutorialsRow = ({tutorial,mytutorial,setMytutorial}) => {
    const handleDelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`${import.meta.env.VITE_API_URL}/deletetutorials/${id}`).then(data=>{
        if(data.deletedCount){
            Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
    });
    const remainingtips=mytutorial.filter(tips=>tips._id!==id)
    setMytutorial(remainingtips);
        }
    })
    

   
  }
});

    }

    return (
        <>
            <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={tutorial.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {tutorial.description}
        </td>
        <td>{tutorial.language}</td>
        <td>{tutorial.price}</td>
        <td>{tutorial.reviews}</td>
        <th>
            <button onClick={()=>handleDelete(tutorial._id)} className="btn text-white bg-green-600 btn-xs">Delete</button>
        <NavLink to={`/updatetutorials/${tutorial._id}`}>
            <button className="btn text-white bg-green-600 btn-xs">Update</button>
        </NavLink>
            
          
        </th>
      </tr>
        </>
    );
};

export default MyTutorialsRow;