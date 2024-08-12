import React, { useState } from 'react'
import VideoDataContext from './VideoDataContext';


const VideoDataContextProvider = ({ children }) => {
    const [videoData, setVideoData] = useState();

    return (
        <VideoDataContext.Provider value={{ videoData, setVideoData }}>
            {children}
        </VideoDataContext.Provider >
    )
}

export default VideoDataContextProvider