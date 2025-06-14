import React from 'react';

const MyTutorsRows = ({tutor}) => {
    console.log(tutor);
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
        <td>
          {tutor.description}
        </td>
        <td>{tutor.Language}</td>
        <td>{tutor.Price}</td>
        <td>{tutor.reviews}</td>
      </tr>
        </>
    );
};

export default MyTutorsRows;