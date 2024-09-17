import React, { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import Alltutorial from '../../AllData/Alltutorial.json';

const TopicsDetails = () => {
  const { TitleName, TitleNameTopic } = useParams();
  const [displaydtl, setDisplaydtl] = useState([]);
  const [btnStatus, setBtnStatus] = useState(false);
  const [mark, setMark] = useState([]);
  
  // Access the calculateProgress function from the Outlet context
  const { calculateProgress } = useOutletContext();

  useEffect(() => {
    const DisplayContents = Alltutorial.find(item => item.Title === TitleName);
    if (DisplayContents) {
      setDisplaydtl(DisplayContents.Details || []);
    }

    const markedTopics = JSON.parse(localStorage.getItem('markedTopics')) || [];
    setMark(markedTopics);
  }, [TitleName, TitleNameTopic]);

  useEffect(() => {
    let updatedMark = [...mark];
    if (!updatedMark.includes(TitleNameTopic)) {
      setBtnStatus(false);
    }
    else {
      setBtnStatus(true);
    }
  }, [TitleNameTopic, mark]);

  const handleMarkAsDone = () => {
    let updatedMark = [...mark];
    if (!updatedMark.includes(TitleNameTopic)) {
      updatedMark.push(TitleNameTopic);
      setMark(updatedMark);
      localStorage.setItem('markedTopics', JSON.stringify(updatedMark));
      setBtnStatus(true);
      
      // Call the calculateProgress function to update the progress
      calculateProgress();
    }
  };

  return (
    <div className='w-full'>
      <h1 className=' text-5xl font-bold text-white'>{TitleNameTopic} ?</h1><br />
      <div>
        {
          displaydtl.filter(elem => elem.Topics === TitleNameTopic).map((ele, idx) => {
            return (
              <div key={idx} className='flex flex-col text-white'>
                <p>{ele.TopicsDescription}</p><br />
                {
                  ele.FUlldetails && ele.FUlldetails.map((items, id) => (
                    <div key={id} className=' bg-transparent text-white p-3'>
                      <h1 className=' text-2xl font-bold'>{items.heading}</h1>
                      <p className=' w-full pt-2'>{items.fullDescription}</p>
                    </div>
                  ))
                }
                <div className=' flex gap-5 mt-6 relative -right-1'>
                  <button className=' p-2 border-2 border-black text-green-500 bg-black rounded-lg' onClick={handleMarkAsDone}>
                    {btnStatus ? "Mark done ✔" : "Mark as done"}
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TopicsDetails;
