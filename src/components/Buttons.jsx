import React from 'react'

const Buttons = () => {
    const items = ['All', 'Javascript', 'News', 'Live', 'Business', 'Events',
        'Information', 'Music', 'Recently upload', 'Movie', 'Cricket', 'Games', 'Watched', 'Programming', 'Python', 'Comady', 'Education']
    return (
        <div className='mt-5'>
            {
                items.map((item, index) => (
                    <button key={index} className='bg-gray-200 font-semibold hover:bg-gray-300 ms-5 ps-2 pr-2 p-1 rounded gap-2' >{item} </button>
                ))
            }
        </div>
    )
}

export default Buttons