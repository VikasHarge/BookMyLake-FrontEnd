import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LeftNav from "./LeftNav";
import RightDash from "./RightDash";
import "./Dashboard.css";

const theme = {
  dark: {
    background: "#0b234f",
    background2: "#244789",
    text: "#ffff",
    heading1: "#FA6500",
    heading2: "#148d09",
  },
  light: {
    background: "#fff",
    background2: "#244789",
    text: "rgb(0, 0, 0)",
    heading1: "#FA6500",
    heading2: "#244789",
  },
};

const Dashboard = () => {
  return (
    <>
      <ThemeProvider theme={theme} >
        <div className="dashboard_container">
          <div>
            <div className="dashboard">
              <LeftNav />
              <RightDash />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
