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
    const video = {
        thumbnail: 'https://i.ytimg.com/vi/abc123/default.jpg',
        title: 'Learn React in 10 Minutes',
        channelName: 'React Channel',
        channelLogo: 'https://yt3.ggpht.com/ytc/AAUvwngc/default.jpg',
        views: '1.2M',
        timestamp: '1 week ago',
    };

    return (
        <div className='ms-2'>
            <Chips />
            <div className='lg:grid lg:grid-cols-5 space-y-3 mt-4 ms-10 mr-5 space-x-3 '>
                {
                    videoData !== undefined ?
                        videoData
                            .filter(item => item.type === "video")
                            .map((item, index) => (
                                <VideoCard key={index} data={item}  />
                            )) : ''
                }
            </div>
        </div>
    )
}
