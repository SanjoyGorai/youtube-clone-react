import React, { useContext, useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import axios from 'axios';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';
import formatViewsCount, { timeAgo } from '../utils/formatViewsCount';
import formatYouTubeDuration from '../utils/formatYouTubeDuration';
import { API_KEY } from '../api/apiKeys';

export const VideoCard = ({ data }) => {

    const [channelDetails, setChannelDetails] = useState()
    if (channelDetails !== undefined) {
        console.log('channelDetails', channelDetails);
    }
    // console.log('video details', data);


    useEffect(() => {
        (async () => {
            const url = `https://www.googleapis.com/youtube/v3/channels`;
            axios.get(url, {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: data?.snippet?.channelId,
                    key: API_KEY
                }
            })
                .then(response => {
                    // console.log('Channel Details videocard: ', response.data.items[0].snippet.thumbnails.high.url);
                    // setChannelDetails(response.data.items[0].snippet.thumbnails.high.url)
                    setChannelDetails(response.data)
                })
                .catch(error => {
                    console.error('Error fetching the channel data:', error);
                });
        })();

    }, [])


    return (
        <div>
            <div className=" overflow-hidden " key={''}>
                <div className="relative">
                    <img
                        className="w-full rounded-xl"
                        src={data?.snippet?.thumbnails !== undefined ?
                            data?.snippet?.thumbnails.high.url :
                            'https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg'}
                        alt="Thumbnail"
                    />
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                        {/* {data?.contentDetails?.duration} */}
                        {formatYouTubeDuration(data?.contentDetails?.duration)}
                    </span>
                </div>

                <div className="py-2 flex flex-row items-start 00">
                    <Avatar src={channelDetails?.items[0]?.snippet?.thumbnails?.high?.url} size="36" round={true} className='' />
                    <div className='flex flex-col ms-2'>
                        <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                            {data?.snippet?.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {data?.snippet?.channelTitle}
                        </p>
                        <div className='flex items-center'>
                            <p className="text-gray-600 text-sm truncate">
                                {/* {'1.6M views'} */}
                                {formatViewsCount(data?.statistics?.viewCount)}
                            </p>
                            <BsDot />
                            <p className="text-gray-600 text-sm">
                                {timeAgo(data?.snippet?.publishedAt)}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
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