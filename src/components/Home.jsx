import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chips from './Chips'
import { Feed } from './Feed'
import ThemeContext from '../context/ThemeContext'
import { AutoSuggestion } from './Autosuggestion'

const Home = () => {

    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`${isDark ? 'bg-gray-500' : ''} `}>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className=''>
                    {/* <AutoSuggestion /> */}
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home