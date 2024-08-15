import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import Avatar from 'react-avatar';
import { BsDot } from 'react-icons/bs';
import axios from 'axios';

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState()
    const { isDark, setIsDark } = useContext(ThemeContext);
    // const { setLoading } = useAppContext()
    const { searchQuery } = useParams();
    const img = `https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg`;
    const API_KEY = 'AIzaSyCW6sZ0RB6mPVVhcmYoz0N7PC1z8bZBwww';
    console.log('searchQuery', searchQuery);
    if (searchResult !== undefined) {
        console.log('searchResult :', searchResult);

    }

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: "snippet",
                        regionCode: 'IN',
                        maxResults: 50,
                        q: searchQuery,
                        key: API_KEY,
                        type: "video",
                    },
                });
                setSearchResult(response.data.items);
                console.log('Searched Videos: ', response.data.items);

            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, [searchQuery])
    return (
        <div className='flex w-full h-full'>
            <div className='flex-shrink-0 overflow-y-auto'>
                <Sidebar />
            </div>
            <div className={`ms-56 flex-grow overflow-y-auto ${isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"}`}>
                <div className='p-4'>
                    {
                        <div className='flex flex-col md:flex-row mb-8'>
                            <Link to={`}/${''}`}>
                                <img
                                    // src={'result?.snippet?.thumbnails.medium?.url'}
                                    src={img}
                                    alt={'result?.snippet?.title'}
                                    className='w-full h-auto object-cover rounded-md max-w-[500px]'
                                />
                            </Link>
                            <div className="flex flex-col items-start ms-3">
                                <h3 className="text-start text-xl text-gray-900 text-md font-semibold ">
                                    {/* {data.title} */}
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
                                        {'1 year ago'}
                                    </p>
                                </div>
                                <div className='flex items-center gap-2 font-semibold mt-3'>
                                    <Avatar src={'data?.channelThumbnails.standard.url'} size="30" round={true} className='' />
                                    <h3>Channel Name</h3>
                                </div>
                                <p className='mt-2 text-sm'> Highest quality video on YouTube, Best of Dolby Vision Demo 4K HDR, 8K & 12K video ULTRA HD 240 FPS NATURE FILM, ...</p>

                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchPage