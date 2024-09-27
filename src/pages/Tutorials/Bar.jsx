import React from 'react';

const Bar = ({ percentage }) => {
    return (
        <div className="progress-bar w-10/12 overflow-hidden h-2 bg-white rounded-lg m-3">
            <div
                className="progress bg-[#070707] p-1 h-full"
                style={{ width: `${percentage}%`, transition: 'width 0.5s ease' }} // Set width dynamically
            >
            </div>
        </div>
    );
};

export default Bar;
