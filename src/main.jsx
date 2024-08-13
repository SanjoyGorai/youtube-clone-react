import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//mui fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeContextProvider from './context/ThemeContextProvider.jsx';
import VideoDataContextProvider from './context/VideoDataContextProvider.jsx';
import { LoadingContextProvider } from './context/LoadingContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <VideoDataContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </VideoDataContextProvider>
  </ThemeContextProvider>
)
