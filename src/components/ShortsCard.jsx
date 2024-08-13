// src/components/ShortsCard.js
import React from 'react';

const ShortsCard = ({ shorts }) => {
    return (
        <div className="w-48 h-96 bg-green-900 rounded-lg overflow-hidden shadow-md">
            <div className="relative">
                <img className="w-full h-64 object-cover" src={shorts?.thumbnail} alt={shorts?.title} />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                    {shorts?.duration}
                </span>
            </div>
            <div className="p-2">
                <p className="text-white text-sm font-semibold">{shorts?.title}</p>
                <div className="flex items-center mt-2">
                    <img
                        className="w-6 h-6 rounded-full mr-2"
                        src={shorts?.channelLogo}
                        alt={shorts?.channelName}
                    />
                    <p className="text-gray-400 text-xs">{shorts?.channelName}</p>
                </div>
            </div>
        </div>
    );
};

export default ShortsCard;
