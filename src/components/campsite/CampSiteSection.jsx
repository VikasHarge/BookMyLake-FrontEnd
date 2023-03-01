import React from "react";
import CampSiteCard from "./CampSiteCard";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampSiteData } from "../../features/campsites/campsiteSlice";
import Loader from "../../utility/Loader";
import { fetchCampsiteDetails } from "../../features/campsites/camsiteDetailSlice";

const CampSiteSection = () => {
  const { campsiteData, loading, error, campSiteCount } = useSelector(
    (state) => state.campSiteData
  );

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchCampSiteData());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="campsite_section">
          <div className="container head_container">
            <div>
              <h1 className="heading_prime">Top Camp Sites</h1>
            </div>
            <div className="campsite_main">
              {campsiteData.allCampSites &&
                campsiteData.allCampSites.map((item, i) => {
                  return <CampSiteCard key={i} data={item} />;
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(CampSiteSection);
