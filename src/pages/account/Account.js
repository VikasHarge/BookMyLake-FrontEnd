import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaData from "../../components/metadata/MetaData";
import { logout } from "../../features/users/userSlice";
import { StyledButton } from "../../MainSite/dashboard-components/StyledComponents/Button/Button";
import { PopupDiv, StyledOverly } from "../../MainSite/dashboard-components/StyledComponents/popupOverly/PopupOverly";
import { StyledBodyContainer, StyledBorderDiv, StyledContainer, StyledDotedBox, StyledHeadingDiv, StyledImg, StyledTitleDiv, StyledWhiteContainer } from "../../StyledComponents/containers/Containers";
import { PageNavHeaderDiv } from "../../StyledComponents/NavHeader/NavHeader";
import Loader from "../../utility/Loader";
import UpdateUserPopup from "./component/UpdateUserPopup";

const Account = () => {

  const dispatch = useDispatch()

  const { loading, userData, isAuthenticated, error } = useSelector(
    (state) => state.userData
  );

  const [createdAt, setCreatedAt] = useState(Date())
  const [updateUserPopup, setUpdateUserPopup] = useState(false);

  useEffect(()=>{
    if(userData){
      let date = new Date(userData.user.createdAt)
      date = date.toUTCString().slice(0, 16)
      setCreatedAt(date)
    }
  },[])

  const logoutUser = ()=>{
    dispatch(logout())
  }

  return <>
        { <MetaData title={userData.user.role === 'admin'? "Admin | Profile | Pawna | BookMyLake" : "Profile | Pawna | BookMyLake" } ></MetaData>}
        {loading ? <Loader /> : 
      <>
      {
        updateUserPopup && <UpdateUserPopup {...{userData, setUpdateUserPopup}} />
      } 

        <PageNavHeaderDiv>
        </PageNavHeaderDiv>
        <StyledBodyContainer 
          height="100vh"
        >
          <StyledContainer 
            gridTemCol = '65% 33%'
          >
            <div>
              <StyledWhiteContainer>
                <StyledHeadingDiv
                  fontSize = "1.3rem"
                >
                  Hello, {userData.user.name}. Welcome to BookMyLake
                </StyledHeadingDiv>
              </StyledWhiteContainer>

              <StyledWhiteContainer
                flexDirection = 'column'
              >
                <StyledHeadingDiv>
                  Your Wishlist
                </StyledHeadingDiv>
                <StyledWhiteContainer
                >
                  Wish list is empty, Click to add
                </StyledWhiteContainer>
              </StyledWhiteContainer>

              <StyledWhiteContainer
                flexDirection = 'column'
              >
                <StyledHeadingDiv>
                  Your Current Bookings
                </StyledHeadingDiv>
                <StyledWhiteContainer
                >
                  No Current Bookings, Click to Book
                </StyledWhiteContainer>
              </StyledWhiteContainer>

              <StyledWhiteContainer
                flexDirection = 'column'
              >
                <StyledHeadingDiv>
                  Your Old Bookings
                </StyledHeadingDiv>
                <StyledWhiteContainer
                >
                  No Old Bookings.
                </StyledWhiteContainer>
              </StyledWhiteContainer>
            </div>


            {/* Right Section User informations */}
            <StyledWhiteContainer
              flexDirection = 'column'
            >
            <div>
              <StyledWhiteContainer
                flexDirection = "column"
                padding = "0"
                gap = "1.2rem"
              >
                <StyledImg
                  width = '12rem'
                  height= '12rem'
                  borderRadius = "6rem"
                  src={userData.user.avatar.url} 
                />

                <div>
                  <StyledTitleDiv
                  >
                    <p>Full Name</p>
                    <h1>{userData.user.name}</h1>
                  </StyledTitleDiv>
                  <StyledTitleDiv
                    fontSizeH1="0.9rem"
                  >
                    <p>Email</p>
                    <h1>{userData.user.email}</h1>
                  </StyledTitleDiv>
                  <StyledTitleDiv
                    fontSizeH1="0.9rem"
                  >
                    <p>Phone Number</p>
                    <h1>{userData.user.phone}</h1>
                  </StyledTitleDiv>
                  <StyledTitleDiv
                    fontSizeH1="0.9rem"
                  >
                    <p>Member since</p>
                    <h1>{createdAt}</h1>
                  </StyledTitleDiv>
                </div>

              </StyledWhiteContainer>
            </div>

              <div>
              <StyledButton
                onClick={()=>setUpdateUserPopup(true)}
                color = "#FA6500"
              >
                Update Profile
              </StyledButton>

              <StyledButton
                color="red"
                onClick={logoutUser}
              >
                Logout
              </StyledButton>
              </div>
            </StyledWhiteContainer>
          </StyledContainer>
        </StyledBodyContainer>
      </>
  }</>;
};

export default Account;
