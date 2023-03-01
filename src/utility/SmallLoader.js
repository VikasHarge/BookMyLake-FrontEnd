import React from "react";
import { Dna } from "react-loader-spinner";
import styled from "styled-components";
import logo1 from '../media/images/logo5.png'



const StyledLoaderDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #ffff;
    z-index: 12;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    overflow : hidden;
    .dna-wrapper{
        z-index: 13;
        background-color: #ffff;
    }
    img {
        width : 200px;
        height : auto
    }
`

const SmallLoader = () => {
  return (
    <StyledLoaderDiv className="loader">
        <img src={logo1} alt="logo" />
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </StyledLoaderDiv>
  );
};

export default SmallLoader;
