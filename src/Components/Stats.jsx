import React, { use } from 'react';

const Stats = ({response,res}) => {
    const userData=use(response)
    const tutorialData=use(res)
    let languages=[]
    {
      tutorialData.map(tutor=>languages.push(tutor.language))
    }
    let langset=new Set(languages)
    let reviewNum=0
    {
      tutorialData.map(tutor=>{if(tutor.reviews!==null){
        let tutorev=parseInt(tutor.reviews)
        if(!tutorev.isNaN){
        console.log(tutorev);
        reviewNum=tutorev+reviewNum
        }
        
      }})
    }
    console.log(reviewNum);
    let tutotnum=tutorialData.length
   
    
    
    return (
        <div className="stats shadow text-center">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Tutors/Tutorials number</div>
    <div className="stat-value">{tutotnum}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Languages</div>
    <div className="stat-value">{langset.size}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    </div>
    <div className="stat-title">Users count</div>
    <div className="stat-value">{userData.length}</div>
  </div>
</div>
    );
};

export default Stats;