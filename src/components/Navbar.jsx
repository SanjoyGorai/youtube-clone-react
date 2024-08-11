import React from 'react'
import { IoMenuSharp, IoMicCircle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { BiBell, BiSearch, BiSolidCameraPlus } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const logoUrl = `youtube.png`
    return (
        <div className='flex justify-between   text-black h-20'>
            <div className='flex items-center'>
                <IoMenuSharp className='cursor-pointer size-8 ps-2 mr-3' />
                <img src={logoUrl} alt="" className='w-28 h-10 cursor-pointer' />
            </div>
            <div className='flex items-center'>
                <input type="text" placeholder='Search' className='text-black border border-gray-600 focus:border-black w-96 outline-none h-10 p-2 ps-4 rounded-l-full lg:w-[30rem]' />
                <button><BiSearch className='w-20 bg-white text-black border-black border-r border-y rounded-r-full p-2 size-10' /></button>
                <BsFillMicFill className='ms-5  p-2 size-10 rounded-full cursor-pointer' />
            </div>
            <div className='grid grid-cols-3 items-center space-x-2 me-5'>
                <BiVideoPlus className='size-10 p-2  cursor-pointer' />
                <BiBell className='size-6 cursor-pointer' />
                <Avatar src='https://livewiredemos.com/images/avatar.png' size="40" round={true} className=' cursor-pointer ' />
            </div>
        </div>
    )
}

export default Navbar