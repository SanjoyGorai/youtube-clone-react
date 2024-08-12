import React from 'react'
import { CiSearch } from "react-icons/ci";


export const AutoSuggestion = () => {

    const items = [
        { icon: <CiSearch />, title: 'news' },
        { icon: <CiSearch />, title: 'song' },
        { icon: <CiSearch />, title: 'cricket' },
        { icon: <CiSearch />, title: 'sports' },
    ];

    return (
        <div className='w-80 h-52 rounded flex-col shadow-lg border m-auto ms-96'>
            {
                items.map((item, index) => (
                    <a key={index} className='flex items-center gap-2 ps-2 text-black'> {item.icon} {item.title} </a>
                ))
            }
        </div>
    )
}
