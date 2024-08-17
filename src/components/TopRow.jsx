import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { LiaDownloadSolid } from "react-icons/lia";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import { PiDotsThreeBold } from "react-icons/pi";

const icons = [
    { icon: <ThumbDownIcon />, text: '' },
    { icon: <PiShareFat />, text: 'Share' },
    { icon: <LiaDownloadSolid />, text: 'Download' },
    { icon: <AttachMoneyIcon />, text: 'Thanks' },
    { icon: <ContentCutOutlinedIcon />, text: 'Clip' },
    { icon: <PiDotsThreeBold />, text: '' },
]

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
                    <div className='flex flex-row gap-2 ms-7'>
                        <button className='bg-black text-white rounded-3xl py-2 px-4 font-normal font-roboto'>Join</button>
                        <button className='bg-black text-white rounded-3xl py-2 px-4 font-normal font-roboto'>Subscribe</button>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex flex-row gap-3'>

                    </div>
                    {
                        icons.map((icon, index) => (
                            <button key={index}
                                className='flex flex-row gap-2 items-center bg-gray-200 rounded-3xl py-2 px-4 font-normal font-roboto'>{icon.icon} {icon.text}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopRow