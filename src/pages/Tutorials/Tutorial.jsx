import React from 'react';
import Alltutorial from '../../AllData/Alltutorial.json'; // Make sure the path is correct
import TutorSection from './TutorSection';
import { Link } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className='relative flex flex-wrap bg-black justify-between gap-10 min-h-96 h-fit p-10'>
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
