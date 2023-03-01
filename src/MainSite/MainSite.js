import '../App.css';
import NavBar from '../components/navigation/NavBar';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/account/Account';
import Blogs from '../pages/Blogs';
import AcountLoginSingup from '../pages/User/AcountLoginSignup';
import Help from '../pages/Help';
import CampsitesDetails from '../pages/campsitesDetails/CampsitesDetails';
import { useSelector } from 'react-redux';
import ProtectetRoute from '../utility/ProtectetRoute';
import Footer from '../components/footer/Footer';
import PageNotFound from '../utility/PageNotFound';

function App() {

  const {isAuthenticated } = useSelector((state)=>state.userData)

 

  return (
    <>
        <NavBar/>   
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/gallery' element={<Gallery/>} /> 
          <Route path='/blogs' element={<Blogs />} />    
          <Route path='/login' element={<AcountLoginSingup />} />   
          <Route path='/help' element={<Help />} />    
          <Route path='/campsites/:campsiteId' element={<CampsitesDetails />} />    
          <Route 
            path='/account' 
            element={
              <ProtectetRoute>
                <Account />
              </ProtectetRoute>} 
          /> 
          <Route path='*' element={<PageNotFound/>} />
        </Routes> 
        <Footer/>
    </>

  );
}
 
export default React.memo(App);
