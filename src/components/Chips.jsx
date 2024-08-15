import React, { useContext, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
import categoryItems from '../utils/categoryItems';



const Chips = () => {

    const { videoData, setVideoData } = useContext(VideoDataContext);
    const [selectedItem, setSelectedItem] = useState(categoryItems[0]);

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


    const handleClick = (item) => {
        setSelectedItem(item);
        console.log(`Clicked on: ${item}`);
        // You can perform any other action here, such as updating a parent component or fetching data.
    };

    return (
        <div className='flex flex-row mt-3 '>
            {
                categoryItems.map((item, index) => (
                    <button key={index} label={item}
                        onClick={() => handleClick(item)}
                        className={`font-semibold ms-3 p-1 pl-2 pr-2 rounded bg-gray-200 gap-3 
                                ${selectedItem === item ? 'bg-gray-500' : 'hover:bg-gray-300'}`}
                    >{item} </button>
                ))
            }
        </div>
    )
}

export default Chips