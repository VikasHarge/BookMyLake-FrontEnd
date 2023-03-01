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
  StyledDotedBox,
  StyledBorderDiv,
} from "../../../StyledComponents/containers/Containers";
import { StyledOffBtn } from "../../../StyledComponents/util/StyledUtils";
import Loader from "../../../utility/Loader";
import {
  StyledButton,
  StyledSubmitButton,
} from "../../../MainSite/dashboard-components/StyledComponents/Button/Button";
import {
  RadioDiv,
  StyledInputRadio,
  StyledLabelRadio,
} from "../../../MainSite/dashboard-components/StyledComponents/input/Form";

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
  const [paymentType, setPaymentType] = useState("full");
  const [totalPrise, setTotalPrise] = useState(
    campsiteDetails.campSite.sale_price
  );

  const [advanceAmount, setAdvancedAMount] = useState(0)
  const [payingAmount, setPayingAmount] = useState(0)


  const salePrise = Math.round(campsiteDetails.campSite.sale_price);

  useEffect(() => {
    setTotalPrise((totalPrise) => {
      return (totalPrise =
        adultNum * campsiteDetails.campSite.sale_price +
        childrenNum * campsiteDetails.campSite.sale_price);
    });
  }, [adultNum, campsiteDetails.campSite.sale_price, childrenNum]);

  useEffect(()=>{

    setAdvancedAMount((advanceAmount)=>{

      return advanceAmount = Math.round(totalPrise*0.35)

    })

  },[totalPrise])

  useEffect(()=>{
    if(paymentType === 'advance'){
      setPayingAmount((payingAmount)=>Math.round(advanceAmount))
    } else if(paymentType === 'full') {
      setPayingAmount((payingAmount)=>totalPrise)
    }
  },[payingAmount, paymentType, totalPrise])

  const changePaymentType = (e) => {
    setPaymentType(e.target.value);
  };


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
                        salePrise,
                      }}
                    ></PopupCard>
                  )}
                </div>
                <div className="selectedInfo">
                  {" "}
                  {`${
                    adultNum > 1 ? adultNum + " Adults," : adultNum + " Adult,"
                  }  ${
                    childrenNum > 1
                      ? childrenNum + " Childrens."
                      : childrenNum + " Children."
                  }`}
                </div>
              </div>
            </div>
          </StyledBookingInfoDiv>

          <RadioDiv margin="0">
            <div className="radioInputContainer">
              <StyledInputRadio
                type="radio"
                id="full"
                name="payment"
                value="full"
                checked={paymentType === "full"}
                onChange={changePaymentType}
              />
              <StyledLabelRadio htmlFor="advance">Pay Full</StyledLabelRadio>
            </div>

            <div className="radioInputContainer">
              <StyledInputRadio
                type="radio"
                id="advance"
                name="payment"
                value="advance"
                checked={paymentType === "advance"}
                onChange={changePaymentType}
              />
              <StyledLabelRadio htmlFor="advance">
                Pay Advace (35%)
              </StyledLabelRadio>
            </div>
          </RadioDiv>

          <StyledWhiteContainer padding="1rem 0 0 0" margin="0">
            <StyledDotedBox>
              <div className="totalPriseContainer">
                <StyledTitleDiv fontSize="1.1rem" color="gray" fontWeight="600">
                  Total Price
                </StyledTitleDiv>
                <StyledTitleDiv
                  fontSize="1.6rem"
                  color="var(--color-primary)"
                  fontWeight="700"
                >
                  {`₹ ${totalPrise}/-`}
                </StyledTitleDiv>
              </div>


              { paymentType === 'advance' && (
                <StyledBorderDiv 
                  
                >

                  <div className="advancedInfoDiv" >
                    <StyledTitleDiv fontSize="1rem" color="gray" fontWeight="600">
                      Pay Advance Now :-
                    </StyledTitleDiv>

                    <StyledTitleDiv
                      fontSize="1rem"
                      color="var(--color-primary)"
                      fontWeight="600"
                    >
                      {`₹ ${advanceAmount}/-`}
                    </StyledTitleDiv>
                  </div>


                  <div className="advancedInfoDiv" >
                  <StyledTitleDiv fontSize="0.8rem" color="gray" fontWeight="600">
                    Pay Remaining at Check-in :-
                  </StyledTitleDiv>

                  <StyledTitleDiv
                    fontSize="0.8rem"
                    color="var(--color-primary)"
                    fontWeight="600"
                  >
                    {`₹ ${totalPrise-advanceAmount}/-`}
                  </StyledTitleDiv>
                  </div>
                  
                </StyledBorderDiv>
              )}

              <StyledSubmitButton fontSize="1rem">Book Now</StyledSubmitButton>
            </StyledDotedBox>
          </StyledWhiteContainer>
        </StyledBookingContainer>
      )}
    </>
  );
};

export default BookingPanel;
