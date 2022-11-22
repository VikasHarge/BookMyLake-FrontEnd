import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainSite from './MainSite/MainSite'
import DashboardRouter from './MainSite/DashboardRouter';


function App() {

  return (
    <>
        <Routes>
          <Route index path='*' element={<MainSite />} />
          <Route index path='/pawna-25111997-dashboard/admin/*' element={<DashboardRouter />} />
        </Routes>   
    </>

  );
}

export default App;
