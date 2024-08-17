import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import CategoryChips from './CategoryChips'
import { Feed } from './Feed'
import ThemeContext from '../context/ThemeContext'
import { Outlet } from 'react-router-dom'


const Home = () => {

    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`${isDark ? 'bg-gray-500' : ''} flex `}>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Home