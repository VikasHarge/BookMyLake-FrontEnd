import React from "react";
import styled from "styled-components";

const PageHeading = ({ children, ...rest }) => {
  return (
    <HeadingDiv {...rest}>
      <h1>{children}</h1>
    </HeadingDiv>
  );
};

export default PageHeading;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffff;
  border-radius : 1rem;

  h1 {
    text-align: center;
    padding: 0 0.8rem;
    font-size: 2rem;
    color: #244789;
    border-left: 0.4rem solid #FA6500;
  }

  @media screen and (max-width: 600px) {

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    background-color: #ffff;
    border-radius : 0.4rem;


  h1 {
    text-align: center;
    padding: 0 0.6rem;
    font-size: 1.4rem;
    color: #244789;
    border-left: 0.3rem solid #FA6500;
  }
  }
`;
