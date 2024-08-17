import { useContext, useEffect } from "react";
import Home from "./components/Home"
import VideoDataContext from "./context/VideoDataContext";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Feed } from "./components/Feed";
import ThemeContext from "./context/ThemeContext";
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ShortsPage from "./pages/ShortsPage";
import VideoDetailsPage from './pages/VideoDetailsPage'
import SearchBar from "./components/SearchBar";
import YTNavbar from "./components/YTNavbar";
import SearchVideoCard from "./components/SearchVideoCard";

function App() {

  const { videoData, setVideoData } = useContext(VideoDataContext);
  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {

    ; (async () => {
      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
          'x-rapidapi-key': '082d448858msh4365d3559ec3965p1d3ce0jsn3cee09057f1e',
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
      };

      try {
        // const response = await axios.request(options);
        // const videoData = await response.data.data
        // // console.log('Video data from Feed: ', videoData);
        // setVideoData(videoData)
      } catch (error) {
        console.error(error);
      }
    })();

  }, []);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Feed />,
  //       },
  //       {
  //         path: "/search",
  //         element: <SearchPage />,
  //       },
  //       {
  //         path: "/shorts",
  //         element: <ShortsPage />,
  //       },
  //       {
  //         path: "/watch",
  //         element: <VideoDetailsPage />,
  //       },
  //     ],
  //     errorElement: <h1 className='text-2xl text-red-600 font-bold m-5'>ErrorPage wll be created</h1>,
  //   },

  // ]);

  return (
    <div className={`${isDark ? ' bg-[#1B1F23] text-white ' : ''}`}>
      <Navbar />
      {/* <YTNavbar /> */}
      {/* <SearchBar /> */}
      {/* <SearchVideoCard /> */}

      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
        <Route path="/watch" element={<VideoDetailsPage />} />
        <Route path="/shorts" element={<ShortsPage />} />
      </Routes>
    </div>
  )
}

export default App
