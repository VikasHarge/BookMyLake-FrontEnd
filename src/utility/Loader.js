import React from "react";
import { Dna } from "react-loader-spinner";
import styled from "styled-components";
import logo1 from '../media/images/logo5.png'



const StyledLoaderDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #ffff;
    z-index: 999999;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    .dna-wrapper{
        z-index: 9999999;
        background-color: #ffff;
    }
    img {
        width : 200px;
        height : auto
    }
`

const Loader = () => {
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

export default Loader;
