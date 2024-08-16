import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { LuClock4 } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import SubscribedChannel from './SubscribedChannel';
import user from '../../public/user.png'


const subscribedChannels = [
    { logo: user, title: 'T-Series' },
    { logo: user, title: 'Zee Music Company' },
    { logo: user, title: 'PewDiePie' },
    { logo: user, title: 'Cocomelon' },
    { logo: user, title: 'MrBeast' },
]

const Sidebar = () => {


    const navItems = [
        { title: 'Home', icon: <IoMdHome className='size-6' /> },
        { title: 'Shorts', icon: <SiYoutubeshorts className='size-6' /> },
        { title: 'Subscriptions', icon: <MdSubscriptions className='size-6' /> },
    ]

    const navMiddleItems = [
        { title: 'FaRegUser', icon: <FaRegUser className='size-6' /> },
        { title: 'BiHistory', icon: <BiHistory className='size-6' /> },
        { title: 'CgPlayList', icon: <CgPlayList className='size-6' /> },
        { title: 'Watch Later', icon: <LuClock4 className='size-6' /> },
        { title: 'Liked videos', icon: <BiSolidLike className='size-6' /> },
    ]

    function handleClick(item) {
        console.log('Sidebar handleClick', item);
    }

    return (
        <div className='font-roboto'>
            <ul className='ms-3'>
                {
                    navItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 mt-3 cursor-pointer
                             hover:bg-gray-300 w-48 rounded-xl p-1 '
                            onClick={() => handleClick(item.title)}>
                            {item.icon} {item.title}
                        </div>
                    ))
                }
                <hr className='my-3' />
                {
                    navMiddleItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 mt-3 cursor-pointer
                        hover:bg-gray-300 w-48 rounded-xl p-1 '
                            onClick={() => handleClick(item.title)}>
                            {item.icon} {item.title}
                        </div>
                    ))
                }
                <hr className='my-3' />
                <h3 className='font-semibold'>Subscriptions</h3>
                {
                    subscribedChannels.map((item, index) => (
                        <div key={index} className=' flex items-center gap-4 mt-3 cursor-pointer
                        hover:bg-gray-300 w-48 rounded-xl p-1 '
                            onClick={() => handleClick(item.title)}>
                            <SubscribedChannel data={item} />
                        </div>
                    ))
                }

            </ul>
        </div>
    )
}

export default Sidebar