import React, { useContext, useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import CategoryChips from './CategoryChips';
import Facebook from './VideoCardSkeleton';
import { Link } from 'react-router-dom';
import getYTVideos from '../api/getYTVideos';
import Sidebar from './Sidebar';
import ToggleContext from '../context/Togglecontext';
import { ToggleSidebar } from './ToggleSidebar';

export const Feed = () => {
    const [videos, setVideos] = useState();
    const { isToggle } = useContext(ToggleContext);
    const { videoData, setVideoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // setVideos(videoData)
        // console.log('setVideoData Feed:', videoData);
    }
    useEffect(() => {
        (async () => {
            const videos = await getYTVideos()
            setVideoData(videos);
            console.log('Feed videos: ', videos);
        })();

        

    }, [])

    return (
        <div className='ms-2 flex'>
            <div className='flex '>
                {!isToggle ? <Sidebar /> : <ToggleSidebar />}

            </div>
            <div className='flex flex-col  ml-8'>
                <CategoryChips />
                <div className='lg:grid lg:grid-cols-5 space-y-3 mt-4 ms-10 space-x-3 '>
                    {
                        videoData !== undefined ?
                            videoData
                                // .filter(item => item.type === "video")
                                .map((item, index) => (
                                    <Link to={`/watch?v=${item.id}`} key={index}>
                                        <VideoCard data={item} />
                                    </Link>
                                )) : ''
                    }
                </div>
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