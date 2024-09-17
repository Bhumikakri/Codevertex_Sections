import React from 'react';
import '../../App.css'; // Ensure custom CSS is imported

const InternshipCard = (props) => {
  return (
    <div className="group rounded-xl perspective w-80 h-80 hover:shadow-[0_0_20px_10px_rgba(140,69,244,0.8),_0_0_50px_20px_rgba(140,69,244,0.6)]">
      <div className="relative group-hover:cursor-pointer w-full h-full duration-700 preserve-3d hover:rotate-180">

        {/* Front Side */}
        <div className="absolute group-hover:hidden w-full h-full bg-blend-overlay  p-4 flex flex-col items-center justify-center gap-2 rounded-lg">
          <img src={props.allData.url} alt="Internship" className="w-full h-40 object-cover rounded-lg " />
          <h2 className="text-2xl font-semibold text-white">{props.allData.Titles}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute group-hover:flex hidden w-full h-full p-4 flex-col justify-center items-center gap-5 rounded-lg ">
          <button className=" animate-pulse focus:animate-none hover:animate-none inline-flex text-md font-medium bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)] mt-3 px-4 py-2 rounded-lg tracking-wide text-white rotate-180">Apply Now</button>
          <p className="text-lg text-white rotate-180 ">{props.allData.Descrip}</p>
        </div>
      </div>
    </div>
  );
}

export default InternshipCard;
