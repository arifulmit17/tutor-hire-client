import React from 'react';
import { NavLink } from 'react-router';

const MyTutorialsRow = ({tutorial}) => {
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
            <button  className="btn text-white bg-green-600 btn-xs">Delete</button>
        <NavLink to={`/updatetutorials/${tutorial._id}`}>
            <button className="btn text-white bg-green-600 btn-xs">Update</button>
        </NavLink>
            
          
        </th>
      </tr>
        </>
    );
};

export default MyTutorialsRow;