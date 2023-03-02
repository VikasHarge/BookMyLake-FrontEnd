import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { updateUserFail, updateUserRequest, updateUserSuccess } from "../../../features/users/updateUserSlice";
import { loadUser } from "../../../features/users/userSlice";
import { StyledButton } from "../../../MainSite/dashboard-components/StyledComponents/Button/Button";
import { StyledInput, StyledLabel, StyledFileInput } from "../../../MainSite/dashboard-components/StyledComponents/input/Form";
import {
  PopupDiv,
  StyledOverly,
} from "../../../MainSite/dashboard-components/StyledComponents/popupOverly/PopupOverly";
import { StyledHeadingDiv, StyledImg, StyledTitleDiv, StyledWhiteContainer } from "../../../StyledComponents/containers/Containers";
import Loader from "../../../utility/Loader";
import SmallLoader from "../../../utility/SmallLoader";
const configEnv = require('../../../utility/config.json')

const HeadingDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: var(--color-primary-head);
font-size: 0.6rem;
margin-bottom: 16px;
`;


const UpdateUserPopup = ({ userData, setUpdateUserPopup }) => {

    const dispatch = useDispatch()

    const {loading, isUpdated, error} = useSelector(state=>state.userUpdate)

    const[name, setName] = useState(userData.user.name);
    const[email, setEmail] = useState(userData.user.email);
    const[phone, setPhone] = useState(userData.user.phone);


    const [avatar, setAvatar] = useState();
    const [avatarPrev, setAvatarPrev] = useState(userData.user.avatar.url)



    const handleUpdateSubmit = async (e)=>{
        if(name === '' || email === '' || phone === ''){
            toast.warning('Please Fill All Details')
            return
        }
        try {
            dispatch(updateUserRequest());

            const config = {
                headers: {
                  "Content-Type": "multipart/form-data",
                  "Access-Control-Allow-Origin": "*",
                },
                withCredentials: true,
              };

            const {data} = await axios.put(
                `${configEnv.BASE_URL2}/userApi/v1/me/update`,
                {
                    name,
                    email,
                    phone,
                    avatar,
                },
                config,
            )
            dispatch(updateUserSuccess())
        } catch (error) {
            console.log("err",error)
            dispatch(updateUserFail(error.response.data.message))
        }
        dispatch(loadUser())
    }

    const handleUpdateChange = (e)=>{

        if(e.target.name === 'avatar'){
            const reader = new FileReader();
            reader.onload=()=>{
                if(reader.readyState === 2){
                    setAvatarPrev(reader.result);
                    setAvatar(reader.result);
                    console.log(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }



  return (
        <StyledOverly>
      <PopupDiv className="popup">
        {
            loading ? <SmallLoader/> : <>
            <HeadingDiv>
              <StyledHeadingDiv fontSize="1.4rem" >Update Your Details</StyledHeadingDiv>
              <StyledButton color="red"
                onClick={()=>setUpdateUserPopup(false)}
              >Close</StyledButton>
            </HeadingDiv>
            <StyledWhiteContainer 
                flexDirection='row' 
                gap='1rem'
            >
            <StyledWhiteContainer flexDirection='column' >
                    <StyledLabel>
                        Name
                    </StyledLabel>
                    <StyledInput 
                        id='updateName'
                        name='name'
                        value={name}
                        type = 'text'
                        fontWeight = '700'
                        fontSize='1.2rem'
                        onChange={(e)=>setName(e.target.value)}
                     />
                    <StyledLabel>
                        Email
                    </StyledLabel>
                    <StyledInput  
                        id="updateEmail"
                        name="email"
                        value={email}
                        type = 'email'
                        fontWeight = '700'
                        fontSize='1.2rem'
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <StyledLabel>
                        phone
                    </StyledLabel>
                    <StyledInput 
                        id='updatePhone'
                        name='phone'
                        value={phone}
                        type = 'number'
                        fontWeight = '700'
                        fontSize='1.2rem'
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                </StyledWhiteContainer>
                <StyledWhiteContainer 
                    height = 'auto'
                    flexDirection='column' 
                    justifyContent = 'space-between'
                    alignItems = 'center'
                    padding = '0'
                    margin = '0'
                >
                    <StyledImg 
                        src={avatarPrev} 
                        width = '10rem'
                        height= '10rem'
                        borderRadius = "10rem"
                    />
                    <StyledFileInput
                        id='updateAvatar'
                        type='file'
                        accept="image/*"
                        name='avatar'
                        onChange={handleUpdateChange}
                    />
                    
                    <div>
                        <StyledButton 
                            type="submit" 
                            color='green' 
                            onClick={handleUpdateSubmit}
                        >Update</StyledButton>
                        <StyledButton color="orange" >Change Password</StyledButton>
                    </div>
                </StyledWhiteContainer>
            </StyledWhiteContainer></>
        }
      </PopupDiv>
    </StyledOverly>    
  );
};

export default UpdateUserPopup;
