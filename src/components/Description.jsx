import React, { useState } from 'react';

const Description = ({ details }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    console.log('video details Description: ', details);


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

    return (
        <div className='bg-gray-400 rounded p-2'>
            <div className='flex flex-row gap-2 font-semibold'>
                <p>5,671 views  </p>
                <p>9 Feb 2024</p>
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
