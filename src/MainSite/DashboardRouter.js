import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import DataDashboard from "./dashboard-components/pages/DataDashboard";
import CampSitesDash from "./dashboard-components/components/Camps/CampSitesDash";
import BookingsDash from "./dashboard-components/pages/BookingsDash";
import EventDash from "./dashboard-components/pages/EventDash";
import Dashboard from "../MainSite/dashboard-components/Dashboard";

const DashboardRouter = () => {
  return (
    <>
      <Helmet>
        <title>BookMyLake | Admin</title>
      </Helmet>
      <Routes>
        <Route path="" element={<Dashboard />}>
          <Route path="*" element={<DataDashboard />} />
          <Route path="campSites" element={<CampSitesDash />} />
          <Route path="bookings" element={<BookingsDash />} />
          <Route path="events" element={<EventDash />} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRouter;
