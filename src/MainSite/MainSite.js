import '../App.css';
import NavBar from '../components/navigation/NavBar';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from '../pages/Booking';
import Blogs from '../pages/Blogs';
import User from '../pages/User';
import Help from '../pages/Help';
import Campsites from '../pages/Campsites';

function App() {

  const [offset, setOffset] = useState(0);

  useEffect(()=>{
    const onScroll = ()=> {
      setOffset(window.pageYOffset)
    }

    // cleanup code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, {passive : true});
    return ()=> window.removeEventListener('scroll', onscroll)

  }, [])


  return (
    <>
        <NavBar offset={offset}  />   
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/bookings' element={<Booking />} /> 
          <Route path='/blogs' element={<Blogs />} />    
          <Route path='/user-login' element={<User />} />   
          <Route path='/help' element={<Help />} />    
          <Route path='/campsites' element={<Campsites />} />    
        </Routes>   
    </>

  );
}

export default App;
