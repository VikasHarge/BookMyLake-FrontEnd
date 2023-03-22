import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineFieldTime } from "react-icons/ai";
import { GiCampingTent } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdBonfire } from "react-icons/io";
import { BiCameraMovie, BiCheckCircle } from "react-icons/bi";
import { MdSportsTennis, MdHealthAndSafety } from "react-icons/md";
import { PageNavHeaderDiv } from "../../StyledComponents/NavHeader/NavHeader";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { imgArr } from "../../components/context/PhotoContext";
import Loader from "../../utility/Loader";
import parse from "html-react-parser";

import {
  StyledBodyContainer,
  StyledContainer,
  StyledDetailContainer,
  StyledCarouselContainer,
  StyledInfoDiv,
  StyledWhiteContainer,
  StyledHeadingDiv,
} from "../../StyledComponents/containers/Containers";
import { StyledOffBtn } from "../../StyledComponents/util/StyledUtils";

import { fetchCampsiteDetails } from "../../features/campsites/camsiteDetailSlice";
import BookingPanel from "./components/BookingPanel";

const CampsitesDetails = () => {
  const { campsiteId } = useParams();
  const dispatch = useDispatch();
  const [off, setOff] = useState();

  const { campsiteDetails, loading, error } = useSelector(
    (state) => state.campSiteDetails
  );

  useEffect(() => {
    dispatch(fetchCampsiteDetails(campsiteId));
  }, []);

  useEffect(() => {
    if (campsiteDetails) {
      let offPercent = Math.floor(
        100 -
          (campsiteDetails.campSite.sale_price /
            campsiteDetails.campSite.max_price) *
            100
      );
      setOff(() => offPercent);
    }
  }, [campsiteDetails, off]);

  return (
    <Fragment>
      {loading || campsiteDetails === null ? (
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
                <Link to="/campsites">Camp Sites</Link>
                <span>
                  <AiOutlineDoubleRight />
                </span>
                <span> {campsiteDetails.campSite.camp_name}</span>{" "}
              </p>
            </div>
          </PageNavHeaderDiv>
          <StyledBodyContainer>
            <StyledContainer>
              <div>
                <StyledWhiteContainer
                  height="max-content"
                  padding="0.5rem 1rem"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <StyledHeadingDiv fontSize="1.2rem">
                    {campsiteDetails.campSite.camp_name}
                  </StyledHeadingDiv>
                  <div className="reviewsContainer">
                    {campsiteDetails.campSite.ratings < 1 ? null : (
                      <>
                        <StyledOffBtn>{`${campsiteDetails.campSite.ratings}/5`}</StyledOffBtn>{" "}
                        <p className="numOfReviews">{`(${campsiteDetails.campSite.numOfReviews})reviews`}</p>
                      </>
                    )}
                  </div>
                </StyledWhiteContainer>

                <StyledDetailContainer>
                  <StyledCarouselContainer>
                    <div
                      style={{
                        paddingBottom : '1rem'
                      }}
                    >
                      <Carousel
                        stopAutoPlayOnHover={true}
                        autoPlay={true}
                        animation="slide"
                        duration="600"
                      >
                        {campsiteDetails.campSite.images.map((item, i) => {
                          return (
                            <img key={i} className="img" src={item.url}></img>
                          );
                        })}
                      </Carousel>
                    </div>

                    <StyledInfoDiv padding="0.5rem">
                      {campsiteDetails.campSite.utilities &&
                        campsiteDetails.campSite.utilities.map((dis, i) => {
                          return (
                            <StyledWhiteContainer
                              height="max-content"
                              alignItems="center"
                              padding="8px"
                              key={i}
                            >
                              {parse(dis.icon)}
                              <p className="whiteContainerP">{dis.para}</p>
                            </StyledWhiteContainer>
                          );
                        })}

                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <AiOutlineFieldTime />
                        <p className="whiteContainerP">
                          Duration 4:00 PM to 11:00 AM
                        </p>
                      </StyledWhiteContainer>

                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <GiCampingTent />
                        <p className="whiteContainerP">
                          Overnight Stay in Quality tents
                        </p>
                      </StyledWhiteContainer>

                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <IoFastFoodOutline />
                        <p className="whiteContainerP">
                          Welcome tea + Snacks(Pakora's),<br></br> BBQ(half kg
                          for 2 person), <br></br>Unlimted Dinner (Veg/
                          Non-Veg), <br></br> Morning Breakfast, <br></br> (Jain
                          Food Available)
                        </p>
                      </StyledWhiteContainer>
                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <IoMdBonfire />
                        <p className="whiteContainerP">
                          Common Bonfire & Music
                        </p>
                      </StyledWhiteContainer>
                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <MdSportsTennis />
                        <p className="whiteContainerP">
                          Sports Activities <br></br>(Cricket, Volleyball,
                          Archery, <br></br> Dart game, Football, Carrom{" "}
                          <br></br> and so on...)
                        </p>
                      </StyledWhiteContainer>
                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <BiCameraMovie />
                        <p className="whiteContainerP">Open Air Theater</p>
                      </StyledWhiteContainer>

                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <MdHealthAndSafety />
                        <p className="whiteContainerP">
                          BookMyLakes's Assured Safty <br></br> for Family,
                          Couples.
                        </p>
                      </StyledWhiteContainer>
                      <StyledWhiteContainer
                        height="max-content"
                        alignItems="center"
                        padding="8px"
                      >
                        <BiCheckCircle />
                        <p className="whiteContainerP">
                          Free Parking, Common Toilet
                        </p>
                      </StyledWhiteContainer>
                    </StyledInfoDiv>
                  </StyledCarouselContainer>
                </StyledDetailContainer>

                <StyledWhiteContainer height="100px" margin="1rem 0 0 0">
                  ji
                </StyledWhiteContainer>

                <StyledWhiteContainer height="300px" margin="1rem 0 0 0">
                  ji
                </StyledWhiteContainer>
              </div>

              <BookingPanel {...{ campsiteDetails, loading, error, off }} />
            </StyledContainer>
          </StyledBodyContainer>
        </>
      )}
    </Fragment>
  );
};

export default React.memo(CampsitesDetails);
