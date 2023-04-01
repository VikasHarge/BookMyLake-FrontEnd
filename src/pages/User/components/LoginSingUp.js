import React, { Fragment, useEffect, useRef, useState } from "react";
import banner from "../../../media/images/2.jpg"
import Loader from '../../../utility/Loader'
import { useNavigate } from "react-router-dom";
import {
  StyledOverly,
  PopupDiv,
} from "../../../MainSite/dashboard-components/StyledComponents/popupOverly/PopupOverly";
import {
  StyledLoginSignupContainer,
  StyledLoginSignupForm,
  StyledLoginWelcomeImg,
} from "../styled/containerLoginSignup";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { RiLockPasswordFill, RiAccountPinCircleFill } from "react-icons/ri";
import "../LoginSignupStyle.css";
import avatar from '../../../media/images/avatarPreview.jpg'

import {
  StyledInput,
  StyledLabel,
  StyledFileInput
} from "../../../MainSite/dashboard-components/StyledComponents/input/Form";
import { StyledButton, StyledSubmitButton } from "../../../MainSite/dashboard-components/StyledComponents/Button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginPost, registerPost } from "../../../features/users/userSlice";
import MetaData from "../../../components/metadata/MetaData";
import { StyledCloseOverlyBtn } from "../../../StyledComponents/util/StyledUtils";
import { toast } from "react-toastify";



const LoginSingUp = (props) => {

  const dispatch = useDispatch()
  const {error, loading, isAuthenticated, userData } = useSelector(state=>state.userData)
  const navigate = useNavigate()

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const loginTitle = useRef(null)
  const singUpTitle = useRef(null)


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const userDetails = {
    loginEmail:loginEmail,
    loginPassword:loginPassword
  }


  const [user, setUser] = useState({
    name : '',
    email : '',
    password : '',
    phone : '',

  })

  const {name, email, password, phone} = user;
  

  const [signupConPassword, setSignupConPassword] = useState("")

  const [Avatar, setAvatar] = useState()
  const [signupAvatarPreview, setSignupAvatarPreview] = useState('/avatarPreview.jpg')


  const loginSubmit = (e) => {
    e.preventDefault();
    if(userDetails.loginEmail === ''){
      return toast.warn(`Please Provide Email Id`)
    }
    if(userDetails.loginPassword === ''){
      return toast.warn(`Please Enter Password`)
    }
    dispatch(loginPost(userDetails))
  };

  const signupSubmit = (e)=>{
    e.preventDefault();

    if(signupConPassword !== password){
      return toast.warn("Confirm password didn't Match, Please type correct password")
    }

    const registerForm = new FormData();

    registerForm.set("name", name);
    registerForm.set("email", email);
    registerForm.set("phone", phone);
    registerForm.set("password", password);
    registerForm.set("avatar", Avatar);

    dispatch(registerPost(registerForm));

  }

  const registerDataChange = (e)=>{

    if(e.target.name === "avatar"){

        const reader = new FileReader()

        reader.onload=()=>{
            if(reader.readyState === 2){
                setSignupAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
     

    } 
    if(e.target.name === "conPassword"){
      setSignupConPassword(e.target.value)
    }
    user[e.target.name] = e.target.value;
    setUser({...user})

  }

  useEffect(()=>{
    console.log(userData);
    if(userData){
      if(error){

      }
      if(isAuthenticated && userData.user.role === 'admin' ){
        console.log("role is",userData.user.role);
        navigate('/admin/dashboard')
      }
      if(isAuthenticated && userData.user.role === 'user'){
        navigate('/account')
      }
    }
  },[userData])

  //Input Styling 
  const inputStyleProps = {
    backgroundColor:"var(--color-light-head)",
    backgroundColorFocus:"var(--color-light-primary)",
    borderBottom:"2px dashed var(--color-light-head2)",
    padding : "3px 10px",
    height:"1.6rem",

  }


  useEffect(()=>{
    if(!loading){
      loginTitle.current.classList.add('tabColor')
    }
  },[])

  

  const switchTab = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      loginTitle.current.classList.add('tabColor')
      singUpTitle.current.classList.remove('tabColor')

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      loginTitle.current.classList.remove('tabColor')
      singUpTitle.current.classList.add('tabColor')


      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }

  };

  const close = ()=>{
    navigate('/')
  }

  return (
    <Fragment>
      <MetaData title="Login, Signup | Pawna | BookMyLake" ></MetaData>
      {loading ? 
        (<Loader/>)
        :
        (<div className="login_page_container" >
      <div className="login_signup_container" >

        <StyledLoginSignupContainer
            backgroundImg = {banner}
            className="StyledLoginSignupContainer"

        >

          <StyledLoginWelcomeImg>

          </StyledLoginWelcomeImg>


          <StyledLoginSignupForm>

            <StyledCloseOverlyBtn
              onClick={close}
              backgroundColor = "red"
            >
                X
            </StyledCloseOverlyBtn>
            <div className="loginSignupBox">
              <div>
                <div className="login-signup-toggle">
                  <p onClick={(e) => switchTab(e, "login")} ref={loginTitle} >LOGIN</p>
                  <p onClick={(e) => switchTab(e, "register")} ref={singUpTitle} >SIGNUP</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginform" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <div className="loginLableContainer">
                    <MdEmail />
                    <StyledLabel htmlFor="loginEmailInput">
                      Enter Login Email
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="loginEmailInput"
                    type="email"
                    name="loginEmailInput"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    {...inputStyleProps}
                    height="2rem"

                  />
                </div>
                <div className="loginPassword">
                  <div className="loginLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="loginPasswordInput">
                      Enter Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="loginPasswordInput"
                    type="password"
                    name="loginPasswordInput"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    {...inputStyleProps}
                    height="2rem"

                  />
                </div>
                <StyledSubmitButton
                    margin="0 0 6px 0"
                
                >Login</StyledSubmitButton>
                <Link to="/password/forgot">Forget Password ?</Link>
              </form>


              {/* Register Form */}
              <form className="signUpForm" encType='multipart/form-data' ref={registerTab} onSubmit={signupSubmit}>
                {/* User Name */}
                <div className="signupName">
                  <div className="signupLableContainer">
                    <RiAccountPinCircleFill />
                    <StyledLabel htmlFor="name">
                      Full Name
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    {...inputStyleProps}
                  />
                </div>
                {/* User Email */}
                <div className="email">
                  <div className="signupLableContainer">
                    <MdEmail />
                    <StyledLabel htmlFor="signupEmailInput">
                      Your Email
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="signupEmailInput"
                    type="email"
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                    {...inputStyleProps}
                  />
                </div>
                {/* User Phone */}
                <div className="phome">
                  <div className="signupLableContainer">
                    <MdPhoneIphone />
                    <StyledLabel htmlFor="signupPhoneInput">
                      Your Phone Number
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="signupPhoneInput"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                    {...inputStyleProps}  
                  />
                </div>
                {/* signup Password */}
                <div className="password">
                  <div className="signupLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="signupPasswordInput">
                      Enter Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                    {...inputStyleProps}
                  />
                </div>
                {/* Confirm Password */}
                <div className="signupConPassword">
                  <div className="signupLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="signupConPasswordInput">
                      Confirm Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="conPassword"
                    type="password"
                    name="conPassword"
                    value={signupConPassword}
                    onChange={registerDataChange}
                    {...inputStyleProps}
                  />
                </div>

                <div id="registerImg">
                    <div className="signupAvatarContainer" >
                        <img id="avatarPreview" src={signupAvatarPreview} alt="avatar-preview" />
                    </div>
                  {/* <div className="signupLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="signupAvatarInput">
                      Confirm Password
                    </StyledLabel>
                  </div> */}
                  <input
                    id="signupAvatarInput"
                    type="file"
                    accept="image/*"
                    name="avatar"
                    onChange={registerDataChange}
                  />
                </div>


                {/* <StyledSubmitButton
                    margin="0 0 6px 0"
                >Register</StyledSubmitButton> */}
                <input
                    type="submit"
                    value="Register"
                    className="registerBtn"
                    // disabled={loading ? true : false}
                />
              </form>
            </div>
          </StyledLoginSignupForm>


        </StyledLoginSignupContainer>
      </div>
    </div>)}
    </Fragment>
  );
};

export default LoginSingUp;
