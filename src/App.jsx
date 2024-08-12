import { useContext, useEffect } from "react";
import Home from "./components/Home"
import VideoDataContext from "./context/VideoDataContext";
import axios from "axios";


function App() {

  const { videoData, setVideoData } = useContext(VideoDataContext);

  useEffect(() => {
    ; (async () => {
      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
          'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const videoData = await response.data.data
        console.log('Video data from Feed: ', videoData);
        setVideoData(videoData)
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])


  return (
    <div className="">
      <Home />
    </div>
  )
}

export default App
