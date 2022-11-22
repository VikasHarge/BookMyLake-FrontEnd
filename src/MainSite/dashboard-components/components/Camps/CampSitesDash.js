import React, { useState } from "react";
import "./Camps.scss";
import Table from "./Table";
import AddCampPopup from "./AddCampPopup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const CampSitesDash = () => {

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      <div className="camps_container">
        <div className="camp_add_container">
          <div className="camp_add_btn widge">
            <button onClick={()=>setShowPopUp(true)}>Add Camp</button>
          </div>
        </div>
        <Table />
      </div>
      <ToastContainer/>
      {
        showPopUp && <AddCampPopup setShowPopUp={setShowPopUp} />
      }
    </>
  );
};

export default CampSitesDash;
