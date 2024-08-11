import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";


const Sidebar = () => {

    const navItems = [
        { title: 'Home', icon: <IoMdHome className='size-6' /> },
        { title: 'Shorts', icon: <SiYoutubeshorts className='size-6' /> },
        { title: 'Subscriptions', icon: <MdSubscriptions className='size-6' /> }
    ]

    return (
        <div className=''>
            <ul className='ms-3'>
                {
                    navItems.map((item, index) => (
                        <div className='' key={index}>
                            <li className='flex items-center gap-4 mt-3 cursor-pointer hover:bg-gray-300 w-48 rounded-xl p-1 '>{item.icon} {item.title} </li>
                        </div>
                    ))
                }

            </ul>
        </div>
    )
}

export default Sidebar