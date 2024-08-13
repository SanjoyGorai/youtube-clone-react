import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import Avatar from 'react-avatar'
import { BsDot } from 'react-icons/bs'
import Description from '../components/Description';
import TopRow from '../components/TopRow';

const VideoDetailsPage = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    // console.log('videoId', videoId);
    const [videoDetails, setVideoDetails] = useState();
    const [channelDetails, setChannelDetails] = useState();
    const longText = `Now let's talk about another arrival, one that started to change warfare as we know it. But first, a question: what is the biggest problem with Israel's Iron Dome system? I would argue it's the cost. Each Israeli interceptor missile costs about $50,000, but what if Israel had a cost-effective way to stop the rockets, a way to hit one rocket after another endlessly without having to worry about its expensive interceptors running out? Sounds ideal, right? Well, it may become a reality soon because Israel is reportedly rolling out a new defense system. It's the stuff of sci-fi movies. Israel calls it its defensive trump card. It's the iron beam anti-missile laser system...`;


    function formatSubscriberCount(num) {
        if (num >= 1e9) {
            return (num / 1e9).toFixed(1) + 'B'; // Billions
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + 'M'; // Millions
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(1) + 'K'; // Thousands
        } else {
            return num.toString(); // Less than 1,000
        }
    }

    useEffect(() => {
        ; (async () => {

            const options = {
                method: 'GET',
                url: 'https://yt-api.p.rapidapi.com/video/info',
                params: { id: videoId },
                headers: {
                    'x-rapidapi-key': '082d448858msh4365d3559ec3965p1d3ce0jsn3cee09057f1e',
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log('VideoDetailsPage video data: ', response.data);
                setVideoDetails(response.data)
            } catch (error) {
                console.error(error);
            }
        })();

        ; (async () => {
            const options = {
                method: 'GET',
                url: 'https://yt-api.p.rapidapi.com/channel/about',
                params: {
                    id: 'UCAuUUnT6oDeKwE6v1NGQxug'
                },
                headers: {
                    'x-rapidapi-key': '082d448858msh4365d3559ec3965p1d3ce0jsn3cee09057f1e',
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log('About channel VideoCard: ', response.data);
                setChannelDetails(response.data)
            } catch (error) {
                console.error(error);
            }
        })()

    }, [])

    const logo = 'https://livewiredemos.com/images/avatar.png'

    return (
        <div className='max-w-[1150px]'>
            {/* <div className=''>
                <iframe width="900" height="615" className='rounded-xl'
                    src={`https://www.youtube.com/embed/${videoId}?si=09gEC-FRKJLXSWun`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                // https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg
            </div> */}
            <div className="" key={''}>
                <div className="relative">
                    <iframe width="1150" height="685" className='rounded-xl'
                        src={`https://www.youtube.com/embed/${videoId}?si=09gEC-FRKJLXSWun`}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                        {'00:00'}
                    </span>
                </div>

                <div className="py-2 ">
                    <TopRow channelDetails={channelDetails} />
                    {/* <div className='flex flow-row gap-3 items-center'>
                        <Avatar src={logo} size="42" round={true} className='' />
                        <div className='fles p-1'>
                            <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                                {videoDetails?.channelTitle}
                            </h3>
                            <p className="text-gray-600 text-sm truncate">
                                {channelDetails?.subscriberCount !== undefined ?
                                    (formatSubscriberCount(channelDetails?.subscriberCount?.toString()) + ' subscribers') :
                                    'subscriberCount is undefined'
                                }
                            </p>
                        </div>

                    </div> */}
                    <Description details={channelDetails} videoDetails={videoDetails} />


                    {/* <div className='flex items-center'>
                        <p className="text-gray-600 text-sm truncate">
                            {'1.6M views'}
                        </p>
                        <BsDot />
                        <p className="text-gray-600 text-sm">
                            {'1 year ago'}
                        </p>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default VideoDetailsPage