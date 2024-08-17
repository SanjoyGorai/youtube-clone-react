import React, { useContext, useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import { API_KEY } from '../api/apiKeys';
import getYTCategories from '../api/getYTCategories';


const CategoryChips = () => {

    const { videoData, setVideoData } = useContext(VideoDataContext);
    // const [selectedItem, setSelectedItem] = useState(categoryItems[0]);
    const url = `https://www.googleapis.com/youtube/v3/search`;
    const [videoCategories, setvideoCategories] = useState([]);
    const [selectedItem, setSelectedItem] = useState();

    const fetchVideos = async (value) => {
        try {
            const response = await axios.get(url, {
                params: {
                    part: 'snippet',
                    regionCode: 'IN',
                    maxResults: 30,
                    q: value,
                    key: API_KEY,
                    type: "video",
                },
            });
            setVideoData(response.data.items)
            console.log('CategoryChips api call: ', response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }
    useEffect(() => {
        ; (async () => {
            const categories = await getYTCategories();
            setvideoCategories(categories);
            console.log('categories', categories);
            // categories.map(items => {
            //     const category = items?.snippet?.title;
            //     console.log('category:', category);
            // });
        })();

    }, [])


    const handleClick = (item) => {
        fetchVideos(item);
        setSelectedItem(item);
        console.log(`Clicked on: ${item}`);
    };

    return (
        <div className='flex flex-row mt-3 flex-wrap items-center'>
            {videoCategories !== undefined ?
                videoCategories
                    .slice(0, 15)
                    .map((item, index) => (
                        <button
                            key={index} label={item}
                            onClick={() => handleClick(item.snippet.title)}
                            className={`font-semibold ms-3 p-1 pl-2 pr-2 rounded bg-gray-200 gap-3 
                            ${selectedItem === item?.snippet?.title ? 'bg-gray-500' : 'hover:bg-gray-300'}`}
                        > {item?.snippet?.title}  </button>
                    ))
                : 'videoCategories undefined'
            }
        </div >
    )
}

export default CategoryChips