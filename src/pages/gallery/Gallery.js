import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../../components/metadata/MetaData";
import { PageNavHeaderDiv } from "../../StyledComponents/NavHeader/NavHeader";
import Loader from "../../utility/Loader";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  StyledBodyContainer,
} from "../../StyledComponents/containers/Containers";
import PhotoSwiper from "./component/PhotoSwiper";
import PageHeading from "../../globalcomponents/PageHeading";
import PhotoSection from "./component/PhotoSection";
import CampSiteSection from "../../components/campsite/CampSiteSection";

const Gallery = () => {
  const { loading, userData, isAuthenticated, error } = useSelector(
    (state) => state.userData
  );

  return (
    <>
      {
        <MetaData
          title={
            userData?.user?.role === "admin"
              ? "Admin | Gallery | Pawna | BookMyLake"
              : "Gallery | Pawna | BookMyLake"
          }
        ></MetaData>
      }
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageNavHeaderDiv>
            <div>
              <p>
                <Link to="/">Home</Link>
                <span>
                  <AiOutlineDoubleRight />
                </span>
                <Link to="/gallery">Gallery</Link>
              </p>
            </div>
          </PageNavHeaderDiv>
          <StyledBodyContainer
          >
            <div
              className="container"
              style={{ height: "fit-content", paddingBottom: "1rem" }}
            >
              <PageHeading>Gallery</PageHeading>
              <PhotoSwiper />
            </div>
          </StyledBodyContainer>

          <StyledBodyContainer
            backgroundColor='#ffff'            
           >
            <div className="container" style={{
              height: "fit-content",
              paddingBottom: "1rem",
            }} >
              <PageHeading>
                Photo Section
              </PageHeading>
              <PhotoSection/>
            </div>
          </StyledBodyContainer>
        </>
      )}
    </>
  );
};

export default Gallery;
