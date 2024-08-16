import React, { useContext, useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import categoryItems from '../utils/categoryItems';
import { API_KEY } from '../api/apiKeys';
import getYTCategories from '../api/getYTCategories';


const Chips = () => {

    const { videoData, setVideoData } = useContext(VideoDataContext);
    const [selectedItem, setSelectedItem] = useState(categoryItems[0]);
    const url = `https://www.googleapis.com/youtube/v3/search`;
    const [videoCategories, setvideoCategories] = useState([]);

    // const handleClick = async (value) => {
    //     console.info('You clicked the Chip: ', value);
    //     setIsSelected(true)

    //     const options = {
    //         method: 'GET',
    //         url: 'https://yt-api.p.rapidapi.com/search',
    //         params: { query: value },
    //         headers: {
    //             'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
    //             'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         const data = response.data.data;
    //         console.log('Search data from Chips : ', data);
    //         setVideoData(data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

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
            console.log('Chips api call: ', response.data.items);

        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }
    useEffect(() => {
        ; (async () => {
            const categories = await getYTCategories();
            setvideoCategories(categories);
            console.log('length', categories.length);
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
        <div className='flex flex-row mt-3 '> 
            {videoCategories !== undefined ?
                videoCategories.slice(0, 6).map((item, index) => (
                    <button key={index} label={item}
                        onClick={() => handleClick(item)}
                        className={`font-semibold ms-3 p-1 pl-2 pr-2 rounded bg-gray-200 gap-3 
                                ${selectedItem === item ? 'bg-gray-500' : 'hover:bg-gray-300'}`}
                    >{item?.snippet?.title} </button>
                ))
                : 'videoCategories undefined'
            }
        </div>
    )
}

export default Chips