import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const navItems = [
    { title: 'Home', icon: <IoMdHome className='size-6' /> },
    { title: 'Shorts', icon: <SiYoutubeshorts className='size-6' /> },
    { title: 'Subscriptions', icon: <MdSubscriptions className='size-6' /> },
]

export const ToggleSidebar = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            {navItems.map(item =>
                <div className='mt-3 flex flex-col items-center text-[10px]'>{item.icon} {item.title} </div>
            )}
        </div>
    )
}
