import React from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from './TutorCard';

const FindTutors = () => {
    const tutorData=useLoaderData();
    console.log(tutorData);
    
    return (
        <div>
{
            tutorData.map(tutor => <TutorCard tutor={tutor}></TutorCard>)
        }
        </div>
        
        
    );
};

export default FindTutors;