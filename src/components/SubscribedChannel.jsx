import React from 'react'
import Avatar from 'react-avatar';

const SubscribedChannel = ({ data }) => {
    console.log('dddd', data);

    return (
        <div className='flex flex-row items-center gap-2'>
            <Avatar src={data?.logo} size="28" round={true} className=' cursor-pointer ' />
            <h3>{data?.title}</h3>
        </div>
    )
}

export default SubscribedChannel