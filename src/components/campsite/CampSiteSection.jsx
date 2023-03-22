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

  const nextBtnHandler = () => {
    const box = document.querySelector(".campsite_main");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width / 2;
  };

  const prevBtnHandler = () => {
    const box = document.querySelector(".campsite_main");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width / 2;
  };

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

            <div style={{
              width: '100%',
              height: 'fit-content',
              position: 'relative',
            }} >
              <div className="carousel-nav-btn-div">
                <div className="carousel-nav-btn" onClick={prevBtnHandler}>
                  &lt;-
                </div>
                <div className="carousel-nav-btn" onClick={nextBtnHandler}>
                  -&gt;
                </div>
              </div>
              <div className="campsite_main">
                {campsiteData.allCampSites &&
                  campsiteData.allCampSites.map((item, i) => {
                    return (
                      <>
                        <CampSiteCard key={i} data={item} />
                        <CampSiteCard key={i} data={item} />
                        <CampSiteCard key={i} data={item} />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(CampSiteSection);
