import React, { useContext, useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';

export const VideoCard = ({ data }) => {

    // console.log('data from videocard:', data);

    const { videoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('videoData from VideoCard: ', videoData);
    }
    // console.log('video title VideoCard: ', props.data );
    const logo = 'https://livewiredemos.com/images/avatar.png'

    return (
        <div>
            {videoData !== undefined ? (
                <div className=" overflow-hidden " key={''}>
                    <div className="relative">
                        <img
                            className="w-full rounded-xl"
                            src={data?.thumbnails !== undefined ?
                                data?.thumbnails.standard.url :
                                'https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg'}
                            alt="Thumbnail"
                        />
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                            {'data?.lengthText'}
                        </span>
                    </div>

                    <div className="py-2 flex flex-row items-start 00">
                        <div className=' '>
                            {/* <Avatar src={data?.channelThumbnails.standard.url} size="36" round={true} className='' /> */}
                        </div>
                        <div className='flex flex-col ms-14  '>
                            <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                                {data.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {data?.channelTitle}
                            </p>
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
                </div>
            ) : ''}

        </div>

    )
}

// {videoData !== undefined ? (
//     <div className=" overflow-hidden " key={''}>
//         <div className="relative">
//             <img
//                 className="w-full rounded-xl"
//                 src={props.data?.thumbnail !== undefined ?
//                     props.data?.thumbnail[0]?.url :
//                     'https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg'}
//                 alt="Thumbnail"
//             />
//             <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
//                 {props?.data?.lengthText}
//             </span>
//         </div>

//         <div className="py-2 flex flex-row items-start 00">
//             <div className=' '>
//                 <Avatar src={props?.data?.channelThumbnail[0].url} size="36" round={true} className='' />
//             </div>
//             <div className='flex flex-col ms-14  '>
//                 <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
//                     {props.data.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                     {props?.data?.channelTitle}
//                 </p>
//                 <div className='flex items-center'>
//                     <p className="text-gray-600 text-sm truncate">
//                         {'1.6M views'}
//                     </p>
//                     <BsDot />
//                     <p className="text-gray-600 text-sm">
//                         {'1 year ago'}
//                     </p>
//                 </div>

//             </div>
//         </div>
//     </div>
// ) : ''}