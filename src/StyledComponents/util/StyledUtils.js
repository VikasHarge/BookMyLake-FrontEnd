import styled from "styled-components"

export const StyledOffBtn = styled.p`
    background-color : ${(props)=>props.backgroundColor || "#12da007f"};
    color : var(--color-primary-head);
    padding : 0.5rem;
    font-size : ${(props)=>props.fontSize || "1rem"};
    border-radius : 0.5rem;
    font-weight : 600;

  @media screen and (max-width: 600px) {

    padding : 0.4rem;
    font-size : ${(props)=>props.fontSize || "0.6rem"};
    border-radius : 0.4rem;
    font-weight : 500;

  }
`

export  const StyledIncriDicriDiv = styled.div`
    display : flex;
    flex-direction : column;
    padding : 6px;
    margin : 6px 0 0 6px;
    justify-content : center;
    align-items : center;
    font-weight : 400;

    .increDecriTitleContainer{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        margin-bottom : 6px;
    }

    .increDecriTitle{
        color : green;
    }
    .increDecriSubTitle{
        font-size : 10px !important;
    }

    .increDecriBtn{
        display : flex;
        flex-direction : row;
        align-items : center;
        justify-content : center;
        gap : 4px;
    }
    .guestOutput{
        display : flex;
        justify-content : center;
        align-items : center;
        width : 12px;
        height : 12px;
    }
`

export const StyledCloseOverlyBtn = styled.button`
    position : absolute;
    right : 0;
    top : 0;
    left : '';
    bottom : '';
    transition : 0.3s all;
    padding : ${(props)=> props.padding || "6px 8px"};
    border-radius : ${(props)=>props.borderRadius || "0 0.5rem"};
    border : 2px solid;
    border-color : ${(props)=>props.backgroundColor || "red"};
    background-color : ${(props)=>props.backgroundColor || "red"};
    color : ${(props)=>props.color || "#ffff"};
    font-size : ${(props)=>props.fontSize || "1rem"};
    font-weight : 700;
    cursor: pointer;
    &:hover{
        background-color : ${(props)=>props.color || "#ffff"};
        color : ${(props)=>props.backgroundColor || "red"};
        border-color : ${(props)=>props.backgroundColor || "#ffff"} !important;
    }
`
