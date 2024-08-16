import axios from "axios"
import { API_KEY } from "./apiKeys";

const BASE_URL = "https://www.googleapis.com/youtube/v3"

// export const BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${API_KEY}`;
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