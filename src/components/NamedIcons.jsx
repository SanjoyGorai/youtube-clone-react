import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { MdSwitchAccount } from "react-icons/md";
import { Link } from 'react-router-dom';

const items = [
    { title: 'Google Account', icon: <FaGoogle className='size-6' /> },
    { title: 'Switch Account', icon: <MdSwitchAccount className='size-6' /> },
    { title: 'Sign Out', icon: <GoSignOut className='size-6' /> },
];

const NamedIcons = () => {
    return (
        <div className='bg-gray-200 p-1 w-60 rounded-xl'>
            {items.map((item, index) => (
                <Link key={index} className='flex gap-x-2 items-center my-2 hover:bg-gray-300 p-2'>
                    {item.icon}
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

export default NamedIcons