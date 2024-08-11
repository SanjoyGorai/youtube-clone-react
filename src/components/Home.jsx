import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import { Feed } from './Feed'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex flex-col  '>
                    <Buttons />
                    <div className='  '>
                        <Feed />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home