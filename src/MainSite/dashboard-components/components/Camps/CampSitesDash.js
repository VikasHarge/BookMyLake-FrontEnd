import React, { useState } from "react";
import "./Camps.scss";
import Table from "./Table";
import AddCampPopup from "./AddCampPopup";






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
      {
        showPopUp && <AddCampPopup setShowPopUp={setShowPopUp} />
      }
    </>
  );
};

export default CampSitesDash;
