import React, { useContext, useEffect, useState } from 'react'
import { IoMenuSharp, IoMicCircle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { BiBell, BiSearch, BiSolidCameraPlus } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Avatar from 'react-avatar';
import { Link, useNavigation, useParams, useSearchParams } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import CustomizedThemeSwitch from './MaterialUISwitch';
import ThemeContext from '../context/ThemeContext.js'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ToggleContext from '../context/Togglecontext.js'
import { FaUserCircle } from "react-icons/fa";
import user from '/user.png'
import { API_KEY } from '../api/apiKeys.js';

const Navbar = () => {

    const { isToggle, setIsToggle } = useContext(ToggleContext);
    const { isDark, setIsDark } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState()
    // console.log('searchQuery : ', searchQuery);
    // console.log('isToggle: ', isToggle);


    useEffect(() => {
        // (async () => {
        //     const url = `https://www.googleapis.com/youtube/v3/search`;
        //     const searchQuery = 'javascript tutorials';
        //     const params = {
        //         part: "snippet",
        //         q: searchQuery,
        //         type: "video",
        //         maxResults: 50,
                // key: API_KEY
        //     }
        //     axios.get(url, { params })
        //         .then(response => {
        //             console.log('SearchResult videocard: ', response.data);
        //             // setChannelDetails(response.data.items[0].snippet.thumbnails.high.url)
        //             setSearchResult(response.data)
        //         })
        //         .catch(error => {
        //             console.error('Error fetching the channel data:', error);
        //         });
        // })();

    }, [])


    function handleInputFocus(e) {
        console.log('focuss input focus');
        setShowSuggestions(true);
    }

    function handleToggle(e) {
        setIsToggle(!isToggle);
    }
    function handleOnChange(e) {
        // console.log(e.target.value);
        setInput(e.target.value);
    }
    function handleKeyUp(e) {
        if (e.key == 'Enter') {
            navigate(`/search/${searchQuery}`);
            setSearchQuery('');
            console.log('Enter key pressed');

            // ; (async () => {
            //     const options = {
            //         method: 'GET',
            //         url: 'https://fakestoreapi.com/products',
            //     };
            //     try {
            //         const response = await axios.request(options);
            //         console.log('products response', response.data);
            //     } catch (error) {
            //         console.error(error);
            //     }
            // })();
        }
    }

    const handleClearSearchQuery = () => {
        setSearchQuery("");
    };
    const handleSearchQuery = () => {
        if (searchQuery?.length > 0) {
            navigate(`search/${searchQuery}`);
        }
    };

    return (
        <>
            <div className={`${isDark ? '' : ''} p-1 flex justify-between text-black h-14 ${isDark ? 'bg-gray-950 text-white ' : 'bg-white'} `}>
                <div className='flex items-center ms-3'>
                    <Link to={'/'}>
                        <IoMenuSharp className='cursor-pointer size-10 p-2 mr-3 hover:bg-gray-300 hover:rounded-full hover:p-2' onClick={handleToggle} />
                    </Link>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png'}
                        alt="" className='w-30 h-5 cursor-pointer ms-1 select-none' />
                </div>
                <div className='flex items-center'>
                    <input
                        onFocus={handleInputFocus}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") handleSearchQuery();
                        }}
                        value={searchQuery}
                        type="text" placeholder='Search'
                        className={`${isDark ? 'bg-black text-white' : ''} text-black border border-gray-300 select-none 
                         focus:border-sky-600 w-96 outline-none h-10 p-2 ps-4 
                         rounded-l-full lg:w-[32rem]`}
                    />
                    <button className={` ${isDark ? 'bg-black text-white' : ''}`}>
                        <BiSearch className={`${isDark ? 'bg-black text-white' : ''} w-16 bg-white text-gray-500 border-gray-300 border-r border-y rounded-r-full p-2 size-10 hover:bg-gray-200 `} />
                    </button>
                    <BsFillMicFill className='ms-5 p-3 size-10 bg-gray-300 rounded-full
                 hover:bg-gray-300 cursor-pointer' />
                </div>

                <div className='grid grid-cols-4 items-center space-x-2 me-5'>
                    <CustomizedThemeSwitch />
                    <BiVideoPlus className='size-10 p-2 cursor-pointer rounded-full hover:bg-gray-300' />
                    <BiBell className='size-10 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                    <Avatar src={user} size="35" round={true} className=' cursor-pointer ' />
                </div>
            </div >
        </>
    )
}

export default Navbar