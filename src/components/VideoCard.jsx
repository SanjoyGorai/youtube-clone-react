import React, { useContext, useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';

export const VideoCard = (props) => {

    const { videoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('videoData from VideoCard: ', videoData);
    }
    // console.log('video title VideoCard: ', props.data );

    return (
        <div>
            {videoData !== undefined ? (
                <div className="max-w-sm rounded-xl overflow-hidden " key={''}>
                    <div className="relative">
                        <img
                            className="w-full"
                            src={videoData[6].thumbnail[0].url}
                            alt="Thumbnail"
                        />
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                            {'00:00'}
                        </span>
                    </div>

                    <div className=" py-2">
                        <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                            {props.videoData.title}
                        </h3>
                        <div className='flex items-center'>
                            <p className="text-gray-600 text-sm truncate">
                                {'1.6M views'}
                            </p>
                            <BsDot />
                            <p className="text-gray-600 text-sm">
                                {'1 year ago'}
                            </p>
                        </div>
                    </div>
                </div>
            ) : ''}

        </div>

    )
}
