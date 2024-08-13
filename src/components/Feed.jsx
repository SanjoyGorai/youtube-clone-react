import React, { useContext, useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import Chips from './Chips';
import Facebook from './VideoCardSkeleton';

export const Feed = () => {

    const { videoData, setVideoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('setVideoData Feed:', videoData);
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className='ms-2'>
            <Chips />
            <div className='lg:grid lg:grid-cols-5 space-y-3 mt-4 ms-10 mr-5 space-x-3 '>
                {
                    videoData !== undefined ?
                        videoData.map((item, index) => (
                            <VideoCard key={index} videoData={item} videoTitle={item.title} />
                        )) : ''
                }
            </div>
        </div>
    )
}
