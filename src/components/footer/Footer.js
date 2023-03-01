import React from "react";

import bwlogo from "../../media/images/small_Logo_(bw).png";
import {
  StyledCopyright,
  StyledFooterComponent,
  StyledFooterContainer,
  StyledFooterImg,
  StyledFooterSection,
  StyledFooterSectionContainer,
} from "./utils/FooterStyled";
import banner from "../../media/gallery/banner.jpg";

import {BsInstagram , BsFacebook, BsTwitter, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <StyledFooterComponent>
    <StyledFooterContainer height="4rem"></StyledFooterContainer>
      <StyledFooterContainer height="max-content">
        <StyledFooterImg
          borderRadius="2rem 2rem 0 0"
          backgroundImg={banner}
          height="max-content"
        >
          <div className="container">
            <StyledFooterSectionContainer padding = '2rem 2rem 0 2rem' >
              <StyledFooterSection>
                <img src={bwlogo} />
                <p className="addressP" >
                  BookMyLake, <br/>
                  Lonavala, 
                  Thakursai, <br/>
                  Maharashtra 410406
                </p>
              </StyledFooterSection>
              <StyledFooterSection>
                <h1>PAGES</h1>
                <ul>
                  <li><small>-&gt; </small> <p className="linkP" >Home</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Gallery</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Camp Sites</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Blogs</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Bookings</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Help</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Login/Signup</p></li>
                </ul>
              </StyledFooterSection>
              <StyledFooterSection>
                <h1>CAMPSITES</h1>
                <ul>
                  <li><small>-&gt; </small> <p className="linkP"  >Family And Friends</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Couples</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Corporate</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Celebrations</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >Events</p></li>
                  <li><small>-&gt; </small> <p className="linkP" >NYC-24</p></li>
                </ul>
              </StyledFooterSection>
              <StyledFooterSection>
                <h1>CONTACT US</h1>
                <p className="socialIconsList" >
                  <a href="https://www.linkedin.com/in/vikas-harge/" target='_blank' ><BsInstagram/></a>
                  <a href="https://www.linkedin.com/in/vikas-harge/" target='_blank' ><BsFacebook/></a>
                  <a href="https://www.linkedin.com/in/vikas-harge/" target='_blank' ><BsTwitter/></a>
                  <a href="https://www.linkedin.com/in/vikas-harge/" target='_blank' ><BsWhatsapp/></a>
                  <a href="https://www.linkedin.com/in/vikas-harge/" target='_blank' ><BsLinkedin/></a>
                </p>
              </StyledFooterSection>
            </StyledFooterSectionContainer>
            <StyledCopyright>
              <h1>
                Design And Developed With <small> &#10084; </small>  By <a href="https://www.linkedin.com/in/vikas-harge/" target="_blank" >Vikas Harge</a>
              </h1>
              <h1>
                Copy Rights &copy; BookMyLake
              </h1>
            </StyledCopyright>
          </div>
        </StyledFooterImg>

      </StyledFooterContainer>
    </StyledFooterComponent>
    </>
  );
};

export default Footer;
