import React, { useContext } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import VideoDataContext from '../context/VideoDataContext';
const Chips = () => {

    const { videoData, setVideoData } = useContext(VideoDataContext)

    const handleClick = async (value) => {
        console.info('You clicked the Chip: ', value);
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: { query: value },
            headers: {
                'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data.data;
            console.log('Search data from Chips : ', data);
            setVideoData(data)
        } catch (error) {
            console.error(error);
        }
    };

    const items = ['All', 'Javascript', 'News', 'Live', 'Business', 'Events',
        'Information', 'Music', 'Recently upload',]
    //  'Movie', 'NodeJs', 'SQL', 'PHP',]
    // 'Cricket', 'Games', 'Watched', 'Programming', 'Python', 'Comady', 'Education',
    // 'Comady', 'History', 'Streets', 'Luxury vehicles', 'Chill-out music']
    return (
        <Stack direction="row" spacing={1.5} className='mt-3'>
            {
                items.map((item, index) => (
                    <Chip key={index} label={item} onClick={() => handleClick(item)} className='bg-gray-200 font-semibold hover:bg-gray-300 ms-5 ps-2 pr-2 p-1 rounded gap-3' />
                ))
            }
        </Stack>
    )
}

export default Chips