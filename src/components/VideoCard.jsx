import React from 'react'

export const VideoCard = () => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="relative">
                    <img
                        className="w-full"
                        src={'https://i.ytimg.com/vi/YkCZ5ZNRx0Y/mqdefault.jpg'}
                        alt="Video Thumbnail"
                    />
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                        {'50:23'}
                    </span>
                </div>

                <div className="px-4 py-2">
                    <h3 className="text-gray-900 font-bold text-md mb-2 truncate">
                        {'title'}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">
                        {'channel'}
                    </p>
                    <p className="text-gray-600 text-sm">
                        {'views'} views
                    </p>
                </div>
            </div>

        </div>
    )
}
