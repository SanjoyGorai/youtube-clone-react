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

    function handleClick(item) {
        console.log('Sidebar handleClick', item);
    }

    return (
        <div className=''>
            <ul className='ms-3'>
                {
                    navItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 mt-3 cursor-pointer
                             hover:bg-gray-300 w-48 rounded-xl p-1 '   onClick={() => handleClick(item.title)}>
                            {item.icon} {item.title}
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar