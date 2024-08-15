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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChipSelectedContextProvider } from './context/ChipSelectedContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <VideoDataContextProvider>
      <LoadingContextProvider>
        <ChipSelectedContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChipSelectedContextProvider>
      </LoadingContextProvider>
    </VideoDataContextProvider>
  </ThemeContextProvider >
)
