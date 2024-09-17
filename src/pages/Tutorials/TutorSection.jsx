import React from 'react';

const TutorSection = (props) => {
  return (
    <div className='group shadow-slate-300 shadow hover:shadow-none overflow-hidden rounded-xl bg-[#18245531] text-white  w-96 min-h-80 '>
      <div className='overflow-hidden h-64 p-7'>
        <img className='group-hover:scale-110 overflow-hidden rounded-lg w-full h-full' src={props.datas.thumb || '/path/to/default-image.jpg'} alt={`${props.datas.Title} thumbnail`} />
      </div>
      <div className='w-full h-40 relative pl-5'>
        <h1 className='text-3xl font-bold'>{props.datas.Title || 'Unknown Title'}</h1>
        <p className='mt-3 px-4 text-xl text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>{props.datas.Desc || ' '}</p>
        <p className='absolute bottom-4 text-emerald-400'>CodeVertex Team. <span>June 1, 2024</span></p>
      </div>
    </div>
  );
}

export default TutorSection;
