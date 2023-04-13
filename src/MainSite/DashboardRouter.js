import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import DataDashboard from "./dashboard-components/pages/DataDashboard/DataDashboard";
import CampSitesDash from "./dashboard-components/components/Camps/CampSitesDash";
import BookingsDash from "./dashboard-components/pages/BookingsDash";
import EventDash from "./dashboard-components/pages/EventDash";
import Dashboard from "../MainSite/dashboard-components/Dashboard";
import PageNotFound from "../utility/PageNotFound";

const DashboardRouter = () => {
  return (
    <>
      <Helmet>
        <title>Admin | Pawna | BookMyLake</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<DataDashboard />} />
          <Route path="campSites" element={<CampSitesDash />} />
          <Route path="bookings" element={<BookingsDash />} />
          <Route path="events" element={<EventDash />} />
          <Route path='*' element = {<PageNotFound/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRouter;
