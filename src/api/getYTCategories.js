
import axios from "axios"
import { API_KEY } from "./apiKeys";

export const BASE_URL = `https://www.googleapis.com/youtube/v3/videoCategories`

async function getYTCategories() {

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                part: 'snippet',
                regionCode: 'IN',
                key: API_KEY,
            },
        })
        console.log('Youtube getYTCategoties: ', response.data.items);
        return response.data.items;

    } catch (error) {
        console.error(error, 'error fetching youtube data')
    }
}
export default getYTCategories; 