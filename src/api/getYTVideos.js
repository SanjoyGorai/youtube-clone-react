import axios from "axios"


const BASE_URL = "https://www.googleapis.com/youtube/v3"
// const API_KEY = 'AIzaSyCW6sZ0RB6mPVVhcmYoz0N7PC1z8bZBwww';

export const API_KEY = "AIzaSyDD5BpZSzVz_mh1w079o8sZ2mpvsa6_gt8";
// export const BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


async function getYTVideos() {

    try {
        const response = await axios.get(`${YOUTUBE_VIDEO_API}`)
        // console.log('Youtube api getYTVideos: ', response.data.items);
        return response.data.items;

    } catch (error) {
        console.error(error, 'error fetching youtube data')
    }
}
export default getYTVideos;