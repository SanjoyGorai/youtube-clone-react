import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const TopRow = ({ channelDetails, videoDetails }) => {
    console.log('channel Details from TopRow: ', channelDetails);

    return (
        <div>
            <div className='flex flex-row items-center justify-between py-4'>
                <div className='flex items-center'>
                    <img src="" alt="" className='size-12 bg-red-500 rounded-full' />
                    <div className='ms-3'>
                    <h3 className="text-lg font-bold">channel name</h3>
                        <p>subscriber</p>
                    </div>
                    <Stack spacing={2} direction="row" className='ms-7 rounded-xl'>
                        <Button variant="contained">Join</Button>
                        <Button variant="contained">Subscribe</Button>
                    </Stack>

                </div>
                <div className='flex items-center gap-4'>
                    <BiSolidLike className='bg-red-200 p-2 size-8 rounded ' />
                    <PiShareFat className='bg-red-200 p-2 size-8 rounded ' />
                    <PiShareFat className='bg-red-200 p-2 size-8 rounded ' />
                    <PiShareFat className='bg-red-200 p-2 size-8 rounded ' />
                </div>
            </div>
        </div>
    )
}

export default TopRow