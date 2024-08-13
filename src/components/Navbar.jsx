import React, { useContext, useState } from 'react'
import { IoMenuSharp, IoMicCircle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { BiBell, BiSearch, BiSolidCameraPlus } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import CustomizedThemeSwitch from './MaterialUISwitch';
import ThemeContext from '../context/ThemeContext.js'
import { AutoSuggestion } from './Autosuggestion.jsx';

const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);
    const { isDark, setIsDark } = useContext(ThemeContext)
    console.log('Navbar Theme', isDark);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    function handleInputFocus(e) {
        console.log('focuss input focus');
        setShowSuggestions(true);
    }


    function handleToggle(e) {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <div className={`p-1 flex justify-between text-black h-14 ${isDark ? 'bg-gray-500' : 'bg-white'} `}>
                <div className='flex items-center ms-2'>
                    <IoMenuSharp className='cursor-pointer size-10 p-2 mr-3 hover:bg-gray-300 hover:rounded-full hover:p-2' onClick={handleToggle} />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png'}
                        alt="" className='w-30 h-5 cursor-pointer' />
                </div>
                <div className='flex items-center'>
                    <input onFocus={handleInputFocus} type="text" placeholder='Search' className={`text-black border border-gray-600 focus:border-sky-600 w-96 outline-none h-10 p-2 ps-4 rounded-l-full lg:w-[32rem]`} />
                    <button><BiSearch className='w-20 bg-white text-black border-black border-r border-y rounded-r-full p-2 size-10' /></button>
                    <BsFillMicFill className='ms-5 p-3 size-10 bg-gray-200 rounded-full
                 hover:bg-gray-300 cursor-pointer' />
                </div>

                <div className='grid grid-cols-4 items-center space-x-2 me-5'>
                    <CustomizedThemeSwitch />
                    <BiVideoPlus className='size-10 p-2 cursor-pointer rounded-full hover:bg-gray-300' />
                    <BiBell className='size-10 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                    <Avatar src='https://livewiredemos.com/images/avatar.png' size="40" round={true} className=' cursor-pointer ' />
                </div>
            </div >
        </>
    )
}

export default Navbar