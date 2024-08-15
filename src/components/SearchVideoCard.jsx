import React from 'react'
import { Link } from 'react-router-dom';
const img = `https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg`;
import { BsDot } from 'react-icons/bs';
import Avatar from 'react-avatar';
import { timeAgo } from '../utils/formatViewsCount';


const SearchVideoCard = ({ data }) => {
    console.log('SearchVideoCard Items:', data);

    return (
        <div>
            {data !== undefined ?
                <div className='flex flex-col md:flex-row mb-8'>
                    <Link to={'/'}>
                        <img
                            // src={'result?.snippet?.thumbnails.medium?.url'}
                            src={img}
                            alt={'result?.snippet?.title'}
                            className='w-full h-auto object-cover rounded-md max-w-[500px]'
                        />
                    </Link>
                    <div className="flex flex-col items-start ms-3">
                        <h3 className="text-start text-xl text-gray-900 text-md font-semibold ">
                            {data?.snippet?.title}
                            {'OMG😮 Unbelievable! Best 12K HDR 240 fps Dolby Vision'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {/* {data?.channelTitle} */}
                        </p>
                        <div className='flex items-center mt-0'>
                            <p className="text-gray-600 text-sm truncate">
                                {'1.6M views'}
                            </p>
                            <BsDot />
                            <p className="text-gray-600 text-sm">
                                {/* {'1 year ago'} */}
                                {timeAgo(data?.snippet?.publishedAt)}
                            </p>
                        </div>
                        <div className='flex items-center gap-2 font-semibold mt-3'>
                            <Avatar src={'data?.channelThumbnails.standard.url'} size="30" round={true} className='' />
                            <h3>{data?.snippet?.channelTitle}</h3>
                        </div>
                        <p className='mt-2 text-sm'> Highest quality video on YouTube, Best of Dolby Vision Demo 4K HDR, 8K & 12K video ULTRA HD 240 FPS NATURE FILM, ...</p>

                    </div>
                </div>

                : 'items are undefined'}
        </div >
    )
}

export default SearchVideoCard