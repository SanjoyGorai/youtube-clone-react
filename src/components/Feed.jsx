import React, { useContext, useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import Chips from './Chips';
import Facebook from './VideoCardSkeleton';
import { Link } from 'react-router-dom';
import getYTVideos from '../api/getYTVideos';
import getChannelDetails from '../api/getChannelDetails';

export const Feed = () => {
    const [videos, setVideos] = useState()
    if (videos !== undefined) {
        console.log('videos: ', videos);
    }
    useEffect(() => {
        (async () => {
            const videos = await getYTVideos()
            getChannelDetails()
            // console.log('Feed videos getYTVideos: ', videos);
            setVideos(videos);
        })()
    }, [])


    const { videoData, setVideoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('setVideoData Feed:', videoData);
    }


    return (
        <div className='ms-2'>
            <Chips />
            <div className='lg:grid lg:grid-cols-5 space-y-3 mt-4 ms-10 mr-5 space-x-3 '>
                {
                    videos !== undefined ?
                        videos
                            // .filter(item => item.type === "video")
                            .map((item, index) => (
                                <Link to={`/watch?v=${item.id}`} key={index}>
                                    <VideoCard data={item} />
                                </Link>
                            )) : ''
                }
            </div>
        </div>
    )
}

// {
//     videoData !== undefined ?
//         videoData
//             .filter(item => item.type === "video")
//             .map((item, index) => (
//                 <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
//                     <VideoCard data={item} />
//                 </Link>
//             )) : ''
// }