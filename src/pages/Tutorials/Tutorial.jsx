import React from 'react';
import Alltutorial from '../../AllData/Alltutorial.json'; // Make sure the path is correct
import TutorSection from './TutorSection';
import { Link } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className='relative flex flex-wrap bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.1)_70%,rgb(14,0,36,.5)_95%,transparent)] justify-between gap-10 border-2 border-black min-h-96 h-fit p-10'>
      {
        Alltutorial.map((item) => (
          <Link to={`/Tutorials/${item.Title}`} key={item.Title}>
            <TutorSection datas={item} />
          </Link>
        ))
      }
    </div>
  );
}

export default Tutorial;
