import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Alltutorial from '../../AllData/Alltutorial.json';
import Bar from './bar';

const TutorialCard = () => {
  const navigate = useNavigate();
  const { TitleName } = useParams();
  const [newArr, setNewArr] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const givenArray = Alltutorial.find(item => item.Title === TitleName);
    if (givenArray) {
      setNewArr(givenArray.Details || []);
    }

    if (newArr.length > 0) {
      navigate(`/Tutorials/${TitleName}/${newArr[0].Topics}`);
    }
  }, [TitleName, newArr, navigate]);

  useEffect(() => {
    calculateProgress(); 
  }, [newArr]);

  const calculateProgress = () => {
    const markedTopics = JSON.parse(localStorage.getItem('markedTopics')) || [];
    const completedTopics = markedTopics.filter(topic => newArr.some(item => item.Topics === topic));
    const progressPercentage = Math.floor((completedTopics.length / newArr.length) * 100);
    setPercentage(progressPercentage);
  };

  return (
    <div className='flex lg:flex-row flex-col w-full h-fit relative bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)]'>
      <div className='lg:w-3/12 w-full bg-opacity-30 shadow-black shadow-2xl h-full lg:fixed lg:top-0 pb-10'>
        <div className='border-b w-full p-3 text-2xl bg-zinc-900'>
          <Link to='/Tutorials'> <i class="fa-solid fa-arrow-left-long"></i> Back to Tutorials</Link>
        </div>
        <div className='flex flex-col gap-4 p-10 pt-4'>
          <h1 className='text-white text-3xl p-5 pt-6'>{TitleName}</h1>
          <p>{percentage}% Complete</p>
          <Bar percentage={percentage} />
          <div className='my-1 px-4 py-2 border rounded flex gap-x-3 item-center bg-[#1B1A1C] border-[#363943]'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none text-base' />
          </div>
        </div>

        <div className=' pl-10'>
          {
            newArr.map((item, index) => (
              <div key={index} className='flex flex-col gap-10 justify-center'>
                <Link to={`/Tutorials/${TitleName}/${item.Topics}`}>{item.Topics}</Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className='lg:w-8/12 p-10 lg:p-2 relative bg-transparent text-black lg:-right-96'>
        <Outlet context={{ calculateProgress }} />
      </div>
    </div>
  );
};

export default TutorialCard;
