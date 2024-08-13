import { useContext, useEffect } from "react";
import Home from "./components/Home"
import VideoDataContext from "./context/VideoDataContext";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Feed } from "./components/Feed";
import ThemeContext from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ShortsPage from "./pages/ShortsPage";



function App() {

  const { videoData, setVideoData } = useContext(VideoDataContext);
  const { isDark, setIsDark } = useContext(ThemeContext);

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
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/shorts",
          element: <ShortsPage />,
        }
      ],
      errorElement: <h1 className='text-2xl text-red-600 font-bold m-5'>ErrorPage wll be created</h1>,
    },

  ]);


  return (
    <div className={`${isDark ? 'bg-[#1B1F23] ' : ''}`}>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
