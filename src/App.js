import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainSite from "./MainSite/MainSite";
import DashboardRouter from "./MainSite/DashboardRouter";
import { useEffect, useState } from "react";
import React from "react";
import Loader from "./utility/Loader";
import store from '../src/app/store'
import Adminroute from "./utility/AdminRoute ";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampsiteDetails } from "./features/campsites/camsiteDetailSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./features/users/userSlice";

function App() {
  const [webLoading, setWebLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWebLoading(false);
    }, 3000);
  }, []);

  useEffect(()=>{
    console.log('UserLoads');
    store.dispatch(loadUser())
  },[])



  return (
    <>
      {webLoading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <div id='bgImg' />
          <Routes>
            <Route index path="*" element={<MainSite />} />
            <Route
              index
              path="/admin/*"
              element={
                <Adminroute>
                  <DashboardRouter />
                </Adminroute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default React.memo(App);
