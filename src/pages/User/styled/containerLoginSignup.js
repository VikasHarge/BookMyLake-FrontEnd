import styled from "styled-components";



export const StyledLoginSignupContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || "inherit"};
    display : grid;
    grid-template-columns : 1fr 1fr;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    background-image : ${((props)=>props.backgroundImg)};

`
export const StyledLoginWelcomeImg = styled.div`
    border-radius : 1rem 0 0 1rem;
    transition: all 1s ease-in-out;
`

export const StyledLoginSignupForm = styled.div`
    background-color : #ffff;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    padding : 1rem
`