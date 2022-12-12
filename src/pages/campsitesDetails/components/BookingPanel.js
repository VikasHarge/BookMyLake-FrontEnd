import React, { forwardRef, useEffect, useState } from "react";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import DatePickerCom from "./DatePickerCom";
import PopupCard from "./PopupCard";

import {
  StyledBookingContainer,
  StyledBookingInfoDiv,
  StyledWhiteContainer,
  StyledHeadingDiv,
  StyledTitleDiv,
  StyledDotedBox
} from "../../../StyledComponents/containers/Containers";
import { StyledOffBtn } from "../../../StyledComponents/util/StyledUtils";
import Loader from "../../../utility/Loader";
import { StyledButton, StyledSubmitButton } from "../../../MainSite/dashboard-components/StyledComponents/Button/Button";

const BookingPanel = ({ campsiteDetails, loading, error, off }) => {
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [value, setValue] = React.useState(null);
  const [adultNum, setAdultNum] = useState(1);
  const [childrenNum, setChildrenNum] = useState(0);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [totalPrise, setTotalPrise] = useState(campsiteDetails.campSite.sale_price)

  const salePrise = campsiteDetails.campSite.sale_price;

  useEffect(()=>{

    setTotalPrise((totalPrise)=>{
      return totalPrise = ((adultNum*campsiteDetails.campSite.sale_price)+(childrenNum*campsiteDetails.campSite.sale_price))
    })


  },[adultNum, campsiteDetails.campSite.sale_price, childrenNum])

  console.log("booking runs");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <StyledBookingContainer padding="0.5rem 0.6rem">
          <StyledHeadingDiv fontSize="1.2rem">Booking Details</StyledHeadingDiv>
          <StyledWhiteContainer padding="0.5rem">
            <div>
              <div className="bookingHeadDiv">
                <p className="bookingHead">Starting From</p>
                <p className="bookingMaxPrice">
                  ₹ {campsiteDetails.campSite.max_price}/-
                </p>
              </div>
              <div className="bookingSalePrice">
                ₹ {campsiteDetails.campSite.sale_price}/-
                <span>Per Adult</span>
              </div>
            </div>
            <div>
              <StyledOffBtn fontSize="0.9rem" backgroundColor="#148d0980">
                {`${off}% off`}
              </StyledOffBtn>
            </div>
          </StyledWhiteContainer>
          <StyledBookingInfoDiv
            backgroundColor="#e0e0e06e"
            padding="0.5rem 0.8rem"
          >
            <div className="bookingInfoDiv">
              <div className="bookingElementContainer">
                <div className="bookingElement">
                  <div className="bookingElementTitle">
                    <BsCalendarCheck />
                    <p>Check In</p>
                  </div>
                  <p>
                    <DatePickerCom {...{ value, setValue }} />
                  </p>
                </div>
                <div className="selectedInfo">
                  {value && `${month[value.$M]} ${value.$D}, ${value.$y}`}
                </div>
              </div>
            </div>
          </StyledBookingInfoDiv>
          <StyledBookingInfoDiv
            backgroundColor="#e0e0e06e"
            padding="0.5rem 0.8rem"
          >
            <div className="bookingInfoDiv">
              <div className="bookingElementContainer">
                <div className="bookingElement">
                  <div className="bookingElementTitle">
                    <BsPeopleFill />
                    <p>Guests</p>
                  </div>
                  <div>
                    <StyledButton
                      color="var(--color-primary-head)"
                      onClick={() => setShowGuestSelector(true)}
                    >
                      Add Guests
                    </StyledButton>
                  </div>

                  {showGuestSelector && (
                    <PopupCard
                      {...{
                        adultNum,
                        setAdultNum,
                        childrenNum,
                        setChildrenNum,
                        setShowGuestSelector,
                        salePrise
                      }}
                    ></PopupCard>
                  )}
                </div>
                <div className="selectedInfo"> {`${adultNum > 1 ? adultNum+" Adults," : adultNum+" Adult,"}  ${childrenNum > 1 ? childrenNum+" Childrens." : childrenNum+" Children."}`}</div>
              </div>
            </div>
          </StyledBookingInfoDiv>

          <StyledWhiteContainer
            padding = "1rem 0 0 0"
            margin = "0"
          >
            <StyledDotedBox>
              <div className="totalPriseContainer" >
              <StyledTitleDiv
                fontSize="1.1rem"
                color="gray"
                fontWeight="600"
              >Total Price</StyledTitleDiv>
              <StyledTitleDiv
                fontSize="1.6rem"
                color="var(--color-primary)"
                fontWeight="700"
              >
                {`₹ ${totalPrise}/-`}
              </StyledTitleDiv>
              </div>
              <StyledSubmitButton 
                fontSize ="1rem"
              >
                Book Now
              </StyledSubmitButton>
            </StyledDotedBox>
          </StyledWhiteContainer>
        </StyledBookingContainer>
      )}
    </>
  );
};

export default BookingPanel;
