import "../App.css";
import NavBar from "../components/navigation/NavBar";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/Home";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Account from "../pages/account/Account";
import Blogs from "../pages/Blogs";
import AcountLoginSingup from "../pages/User/AcountLoginSignup";
import Help from "../pages/Help";
import CampsitesDetails from "../pages/campsitesDetails/CampsitesDetails";
import { useSelector } from "react-redux";
import ProtectetRoute from "../utility/ProtectetRoute";
import Footer from "../components/footer/Footer";
import PageNotFound from "../utility/PageNotFound";

function App() {
  const { isAuthenticated } = useSelector((state) => state.userData);

  const param = useLocation();
  console.log(param);

  return (
    <>
      {param.pathname === "/login" ? <></> : <NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/photos" element={<Gallery />} />
        <Route exact path="/videos" element={<Gallery />} />
        <Route exact path="/vr" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<AcountLoginSingup />} />
        <Route path="/help" element={<Help />} />
        <Route path="/campsites/:campsiteId" element={<CampsitesDetails />} />
        <Route
          path="/account"
          element={
            <ProtectetRoute>
              <Account />
            </ProtectetRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {param.pathname === "/login" ? <></> : <Footer />}
    </>
  );
}

export default React.memo(App);
