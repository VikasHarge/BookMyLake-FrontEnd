import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainSite from "./MainSite/MainSite";
import DashboardRouter from "./MainSite/DashboardRouter";
import { useEffect, useState } from "react";
import React from "react";
import Loader from "./utility/Loader";

function App() {
  const [webLoading, setWebLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setWebLoading(false);
    }, 3000)
  },[])

  return (
    <>
      {webLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route index path="*" element={<MainSite />} />
          <Route
            index
            path="/pawna-25111997-dashboard/admin/*"
            element={<DashboardRouter />}
          />
        </Routes>
      )}
    </>
  );
}

export default React.memo(App);
