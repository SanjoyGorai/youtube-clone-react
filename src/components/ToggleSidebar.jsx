import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { Link } from 'react-router-dom';

const navItems = [
    { title: 'Home', icon: <IoMdHome className='size-6' /> },
    { title: 'Shorts', icon: <SiYoutubeshorts className='size-6' /> },
    { title: 'Subscriptions', icon: <MdSubscriptions className='size-6' /> },
]

export const ToggleSidebar = () => {
    return (
        <div className='flex flex-col '>
            {navItems.map((item, index) =>
                <div key={index} className='text-[10px]'>
                    <Link className='mt-3 flex flex-col items-center hover:bg-gray-300 rounded-xl py-2'>
                        {item.icon} {item.title}
                    </Link>
                </div>
            )}
        </div>
    )
}
