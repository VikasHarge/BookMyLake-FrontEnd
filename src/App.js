import './App.css';
import NavBar from './components/navigation/NavBar';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

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

  console.log(offset);



  return (
    <>
        <NavBar offset={offset}  />      
        <Home />
    </>

  );
}

export default App;
