import React from 'react';
import InternshipData from '../../AllData/InternshiData.json';
import IntershipCard from './IntershipCard';

const Internship = () => {
  
  return (
    <div className=' w-full h-fit pt-14 p-10'>
      <div className=' w-full flex flex-col justify-center items-center gap-7'>
        <h1 className=' text-6xl font-semibold'>Internships</h1>
        <p className=' w-1/2 text-wrap text-2xl text-center'>Explore our diverse range of internship opportunities for students worldwide.</p>
      </div>
      <div className=' p-3 mt-6 flex flex-wrap justify-between gap-10'>
        {
          InternshipData.map((items)=>{
            return<>
            <IntershipCard allData={items}/>
            </>
          })
        }

      </div>
    </div>
  )
}

export default Internship