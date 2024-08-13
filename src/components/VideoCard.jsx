import React, { useContext, useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import Avatar from 'react-avatar'

export const VideoCard = (props) => {

    const { videoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('videoData from VideoCard: ', videoData);
    }
    // console.log('video title VideoCard: ', props.data );
    const logo = 'https://livewiredemos.com/images/avatar.png'

    return (
        <div>
            {videoData !== undefined ? (
                <div className="max-w-sm overflow-hidden cursor-pointer " key={''}>
                    <div className="relative">
                        <img
                            className="w-full rounded-xl"
                            src={props.data?.thumbnail !== undefined ?
                                props.data?.thumbnail[0]?.url :
                                'https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg'}
                            alt="Thumbnail"
                        />
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                            {'00:00'}
                        </span>
                    </div>

                    <div className="py-2 ">
                        <div className='flex flow-row gap-3 items-center'>
                            <Avatar src={props?.data?.channelThumbnail[0].url} size="42" round={true} className='cursor-pointer' />
                            <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                                {props.data.title}
                            </h3>
                        </div>

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
