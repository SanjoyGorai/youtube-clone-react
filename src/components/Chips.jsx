import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Chips = () => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const items = ['All', 'Javascript', 'News', 'Live', 'Business', 'Events',
        'Information', 'Music', 'Recently upload', 'Movie', 'NodeJs', 'SQL', 'PHP',
        'Cricket', 'Games', 'Watched', 'Programming', 'Python', 'Comady', 'Education',
        'Comady', 'History', 'Streets', 'Luxury vehicles', 'Chill-out music']
    return (
        <Stack direction="row" spacing={1.5} className='mt-3'>
            {
                items.map((item, index) => (
                    <Chip key={index} label={item} onClick={handleClick} className='bg-gray-200 font-semibold hover:bg-gray-300 ms-5 ps-2 pr-2 p-1 rounded gap-3' />
                ))
            }
        </Stack>
    )
}

export default Chips