import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const img = `https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg`;
import { BsDot } from 'react-icons/bs';
import Avatar from 'react-avatar';
import { timeAgo } from '../utils/formatViewsCount';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SearchVideoCard = ({ data }) => {
    console.log('SearchVideoCard Items:', data);

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        // Remove the border after 500ms
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    };


    return (
        <div className=' max-w-[60%]'>
            {data !== undefined ?
                <div className='flex flex-col md:flex-row mb-3'>
                    <Link to={'/'}>
                        <img
                            // src={'result?.snippet?.thumbnails.medium?.url'}
                            src={data?.snippet?.thumbnails?.high?.url}
                            alt={'thumbnail'}
                            className=' h-auto object-cover rounded-md max-w-[500px] max-h-64'
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
                        <p className='mt-2 text-sm'>
                            {data?.snippet?.description}
                        </p>
                    </div>
                    <MoreVertIcon
                        onClick={handleClick}
                        className={`font-semibold cursor-pointer ml-3 size-16 p-1 rounded-full  
                             ${isClicked ? 'border-2 border-gray-600' : ''}
                            `}
                    />
                </div>

                : 'items are undefined'}
        </div >
    )
}

export default SearchVideoCard