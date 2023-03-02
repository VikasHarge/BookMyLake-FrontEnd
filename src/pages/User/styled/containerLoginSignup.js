import styled from "styled-components";



export const StyledLoginSignupContainer = styled.div`
    height : ${(props)=>props.height || "inherit"};
    display : flex;
    flex-direction : row;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    background-image : ${((props)=>props.backgroundImg)};
    width : 100%;

    @media screen and (max-width : 600px) {
        width : 100%;
        display : flex;
        flex-direction : column;
    }



`
export const StyledLoginWelcomeImg = styled.div`
    border-radius : 1rem 0 0 1rem;
    transition: all 1s ease-in-out;
    width : 100%;
    height : inherit;
    @media screen and (max-width : 600px) {
        width : 100%;
        height : 18vh;
    }
`


export const StyledLoginSignupForm = styled.div`
    width  : 100%;
    height : inherit;
    background-color : #fff;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    padding : 1rem;
    @media screen and (max-width : 600px) {
        width : 100%;
        height : 67vh; 
    }

`