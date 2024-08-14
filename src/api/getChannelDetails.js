import axios from "axios"

// const BASE_URL = "https://www.googleapis.com/youtube/v3"
// const API_KEY = 'AIzaSyCW6sZ0RB6mPVVhcmYoz0N7PC1z8bZBwww';

export const API_KEY = "AIzaSyDD5BpZSzVz_mh1w079o8sZ2mpvsa6_gt8";
// export const BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${API_KEY}`;
export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

const BASE_URL = `https://www.googleapis.com/youtube/v3/channels`

async function getChannelDetails(channelId) {

    // const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API key
    const CHANNEL_ID = 'UC0v-tlzsn0QZwJnkiaUSJVQ'; // Replace with the channel ID you want to fetch
    const url = `https://www.googleapis.com/youtube/v3/channels`;

    axios.get(url, {
        params: {
            part: 'snippet,contentDetails,statistics',
            id: channelId,
            key: API_KEY
        }
    })
        .then(response => {
            // console.log('Channel Details getChannelDetails: ', response.data);
            return response.data
        })
        .catch(error => {
            console.error('Error fetching the channel data:', error);
        });

}
export default getChannelDetails;