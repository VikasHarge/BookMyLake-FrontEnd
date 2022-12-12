import '../App.css';
import NavBar from '../components/navigation/NavBar';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from '../pages/Booking';
import Blogs from '../pages/Blogs';
import User from '../pages/User';
import Help from '../pages/Help';
import CampsitesDetails from '../pages/campsitesDetails/CampsitesDetails';

function App() {

  return (
    <>
        <NavBar/>   
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/bookings' element={<Booking />} /> 
          <Route path='/blogs' element={<Blogs />} />    
          <Route path='/user-login' element={<User />} />   
          <Route path='/help' element={<Help />} />    
          <Route path='/campsites/:campsiteId' element={<CampsitesDetails />} />    
        </Routes>   
    </>

  );
}
 
export default React.memo(App);
