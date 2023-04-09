import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Categories  from '../components/Categories'
import OurInspiraton from '../components/OurInspiraton';
import Collection from '../components/Collection';
import GetInTouch from '../components/GetInTouch';
const Home = () => {
  return (
    <div>
      <BrowserRouter>
      <Announcement/> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Slider />}/>
        <Route path="/our-inspiration" element={<OurInspiraton />}  />
        <Route path="/collections" element={<Collection />}/>
        <Route path="/get-in-touch" element={<GetInTouch />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Home