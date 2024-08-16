import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import Avatar from 'react-avatar';
import { BsDot } from 'react-icons/bs';
import axios from 'axios';
import SearchVideoCard from '../components/SearchVideoCard';
import { API_KEY_A } from '../api/apiKeys';

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState();
    const { isDark, setIsDark } = useContext(ThemeContext);
    // const { setLoading } = useAppContext()
    const { searchQuery } = useParams();
    const img = `https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg`;

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
                        maxResults: 10,
                        q: searchQuery,
                        key: API_KEY_A,
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
        <div className='flex w-full h-full mt-2' >
            <Sidebar />
            <div className='flex-shrink-0 overflow-y-auto ms-40'>
                {searchResult !== undefined ?
                    searchResult.map((item, index) =>
                        <SearchVideoCard data={item} key={index} />
                    )
                    : 'searchResult is undefined'
                }

            </div>

        </div >
    )
}

export default SearchPage