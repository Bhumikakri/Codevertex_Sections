import React from 'react';

const Demohome = () => {
  const deals = [
    {
      title: 'Brazil',
      image: 'https://assets.codepen.io/489403/brazil.jpg',
      outPrice: '£849',
      rtnPrice: '£659',
    },
    {
      title: 'Belize',
      image: 'https://assets.codepen.io/489403/belize.jpg',
      outPrice: '£999',
      rtnPrice: '£745',
    },
    {
      title: 'Egypt',
      image: 'https://assets.codepen.io/489403/egypt.jpg',
      outPrice: '£399',
      rtnPrice: '£257',
    },
  ];

  return (
    <div className="flex justify-around items-center h-screen w-screen bg-gray-800">
      {deals.map((deal, index) => (
        <div key={index} className="relative w-48 h-72 group">
          {/* Ring animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent text-9xl">
            <span className="group-hover:text-white transition duration-1000">&#9675;</span>
          </div>

          {/* Card */}
          <div
            className="bg-cover bg-center w-full h-full border border-white transition-all duration-1000 group-hover:blur-sm"
            style={{ backgroundImage: `url(${deal.image})` }}
          ></div>

          {/* Border */}
          <div className="absolute top-0 left-0 w-full h-full border border-white/50 group-hover:border-white transition duration-1000"></div>

          {/* Slide panel */}
          <div className="absolute bottom-[-270px] left-0 w-full h-full hidden  bg-black/50 group-hover:flex flex-col justify-center items-center transition-all duration-1000 group-hover:bottom-0">
            <h6 className="text-white text-lg mb-2">Latest Deals from Heathrow</h6>
            <div className="flex justify-between w-32">
              <span className="text-white">OUT</span>
              <i className="fa fa-plane text-white"></i>
              <span className="text-white">{deal.outPrice}</span>
            </div>
            <div className="flex justify-between w-32 mt-2">
              <span className="text-white">RTN</span>
              <i className="fa fa-plane text-white"></i>
              <span className="text-white">{deal.rtnPrice}</span>
            </div>
          </div>

          {/* Title */}
          <p className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold transition-all duration-1000 group-hover:text-gray-500">
            {deal.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Demohome;
