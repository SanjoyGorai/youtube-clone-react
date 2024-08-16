import React, { useContext, useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import Chips from './Chips';
import Facebook from './VideoCardSkeleton';
import { Link } from 'react-router-dom';
import getYTVideos from '../api/getYTVideos';
import Sidebar from './Sidebar';
import ToggleContext from '../context/Togglecontext';
import { ToggleSidebar } from './ToggleSidebar';

export const Feed = () => {
    const [videos, setVideos] = useState();
    const { isToggle } = useContext(ToggleContext);

    useEffect(() => {
        (async () => {
            const videos = await getYTVideos()
            setVideos(videos);
        })();

    }, [])


    const { videoData, setVideoData } = useContext(VideoDataContext);
    if (videoData !== undefined) {
        // console.log('setVideoData Feed:', videoData);
    }


    return (
        <div className='ms-2 flex'>
            <div className='flex '>
                {!isToggle ? <Sidebar /> : <ToggleSidebar/>}

            </div>
            <div className='flex flex-col  ml-8'>
                <Chips />
                <div className='lg:grid lg:grid-cols-5 space-y-3 mt-4 ms-10 space-x-3 '>
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