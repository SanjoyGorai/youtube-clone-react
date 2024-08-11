import React from 'react'
import { VideoCard } from './VideoCard'

export const Feed = () => {

    const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    return (
        <div className='lg:grid lg:grid-cols-5 space-x-3 space-y-3 mt-4 ms-5'>
            {
                videos.map((_, index) => (
                    <VideoCard key={index} />
                ))
            }
        </div>
    )
}
