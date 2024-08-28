import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './Myhero.jsx'
import Swiper from 'swiper'
import ImageGallery from './Photogallery.jsx'

createRoot(document.getElementById('root')).render(
    <>      
             <App />
             <Hero borderColor={"border-red-500"} bgColor={'bg-red-600'} label = "Contact" />
             <Hero label = "About Us" />
             <ImageGallery />
</>  

)
