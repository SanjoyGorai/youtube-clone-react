import React, { useState } from 'react';

const Description = ({ details, videoDetails }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    console.log('channel details Description: ', details);
    console.log('video details from Description: ', videoDetails);


    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    const text = `The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know.`
    const maxLength = 10;
    let description = '';
    const shouldTruncate = description.length > maxLength;
    if (details?.description !== undefined) {
        description = details.description;
    }
    description = isExpanded || !shouldTruncate ? description :
        description.substring(0, maxLength) + '...';

    function formatViewsCount(views) {
        // Convert views to a number if it's a string
        if (typeof views === 'string') {
            views = Number(views);

            // Check if conversion was successful
            if (isNaN(views)) {
                return 'Invalid number';
            }
        }

        if (views >= 1_000_000_000) {
            return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B views';
        } else if (views >= 1_000_000) {
            return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M views';
        } else if (views >= 1_000) {
            return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K views';
        } else {
            return views + ' views';
        }
    }

    // Example usage:
    console.log('views count: ', formatViewsCount(1500)); // "1.5K views"
    console.log('views count: ', formatViewsCount("1500000")); // "1.5M views"
    console.log('views count: ', formatViewsCount("2000000000")); // "2B views"
    console.log('views count: ', formatViewsCount("not a number")); // "Invalid number"
    function formatDate(dateString) {
        const date = new Date(dateString);

        // Define arrays for month names
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // Extract day, month, and year
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        // Format and return the date string
        return `${day} ${month} ${year}`;
    }

    return (
        <div className='bg-gray-400 rounded p-2'>
            <div className='flex flex-row gap-2 font-semibold'>
                <p>{formatViewsCount(videoDetails?.viewCount)}</p>
                <p>{formatDate(videoDetails?.publishDate)}  </p>
            </div>
            <p>{description}</p>

            {shouldTruncate && (
                <button onClick={toggleDescription} className="text-blue-500">
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default Description;
