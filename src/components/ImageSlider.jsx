import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ImageSlider = () => {
    const images = [
        'https://img.youtube.com/vi/sQiuNEuLwC0/maxresdefault.jpg',
        'https://img.youtube.com/vi/MIHPOz4u-Gc/maxresdefault.jpg',
        'https://img.youtube.com/vi/D8a63vnk-lM/maxresdefault.jpg',
        'https://img.youtube.com/vi/BhCPiKlLXm4/maxresdefault.jpg',
        'https://img.youtube.com/vi/MWiMdPx-FZU/maxresdefault.jpg',
        'https://img.youtube.com/vi/OIf0qVbu_0w/maxresdefault.jpg',
        'https://i.ytimg.com/vi/5inHbCT4f74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBokGIT62HcdQFGgl9okKLBP-Hacw'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 3 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-1/3 h-auto"
                    />
                ))}
            </div>
            <ArrowBackIosNewIcon
                onClick={goToPrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black
                 p-2 rounded-full hover:bg-gray-400 cursor-pointer size-16"
            >
                &#8249;
            </ArrowBackIosNewIcon>
            <ArrowForwardIosIcon
                onClick={goToNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white
                 text-black p-2 rounded-full hover:bg-gray-400 cursor-pointer size-16"
            >
                &#8250;
            </ArrowForwardIosIcon>
        </div>
    );
};

export default ImageSlider;
