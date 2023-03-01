import styled from "styled-components"





export const StyledBodyContainer = styled.div`
  width : 100%;
  height : ${(props)=> props.height || "max-content"};
  background-color : ${(props)=> props.backgroundColor || "var(--color-hover-gray)"};
  /* padding : 18px 0; */
  transition: all 0.3s ease-in-out;

`

export const StyledContainer = styled.div`
  width: var(--container-width-lg);
  height : ${(props) => props.height || "max-content"};
  margin: 0 auto;
  background-color : ${(props) => props.backgroundColor || ""};
  /* border : 1px solid #ffff; */
  display : grid;
  grid-template-columns : ${props=>props.gridTemCol || '69% 29%'};
  gap : 2%;
  padding : 1.5rem 0;
  transition: all 0.3s ease-in-out;

`

export const StyledDetailContainer = styled.div`
    background-color: white;
    width: 100%;
    height: auto;
    border-radius: 0.5em;
    padding: 1rem;
    gap : 1rem;
    transition: all 0.3s ease-in-out;
`
export const StyledCarouselContainer =styled.div`
    display : grid;
    grid-template-columns : 66% 32%;
    gap : 2%;
    .img {
    width: 100%;
    height: 60vh;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
}
`
export const StyledInfoDiv = styled.div`
    background-color : #E0E0E0;
    width : auto;
    height : inherit;
    border-radius : 0.5rem;
    padding : ${(props)=> props.padding || "1rem"};
`

export const StyledWhiteContainer = styled.div`
    width : 100%;
    height : ${(props)=> props.height || "max-content" } ;
    background-color : ${(props)=>props.backgroundColor || "#ffff"};
    border-radius : 0.5rem;
    margin : ${(props)=> props.margin || "0 0 0.5rem 0"};
    padding : ${(props)=> props.padding || "1rem" } ;
    display : flex;
    flex-direction : ${(props)=>props.flexDirection || ""};
    justify-content : ${(props)=> props.justifyContent || ""};
    align-items :${(props)=> props.alignItems || ""};
    gap: ${(props)=>props.gap || "8px"};
    font-size : 1.2rem;
    color : var(--color-primary);

    .whiteContainerP {
        color : var(--color-primary-head);
        font-size : 0.7rem;
        font-weight : 600;
    }
    .reviewsContainer{
        display : flex;
        align-items : flex-end;
        gap : 6px;
    }
    .numOfReviews{
        font-size : 0.8rem;
    }
`

export const StyledImg = styled.img`
    width : ${(props)=>props.width || "6rem"};
    height : ${(props)=>props.height || "6rem"};
    border-radius : ${(props)=>props.borderRadius || ""};
    padding : ${props=>props.padding || ''};
    margin : 0 auto;
    scale : 0.98;
    transition : all 0.3s;
    &:hover{
        scale : 1;
    }
`



export const StyledBookingContainer = styled.div`
    background-color:#ffff;
    height : max-content;
    position : sticky;
    top : 20vh;
    border-radius : 0.5rem;
    padding : ${(props) => props.padding || "1rem"};
    .bookingHeadDiv{
        display : flex;
        justify-content : center;
        align-items : center;
        gap : 1rem;
    }
    .bookingHead{
        font-size : 0.8rem;
        color : black;
    }
    .bookingMaxPrice {
        font-size : 1rem;
        color : grey;
        text-decoration : line-through;
    }
    .bookingSalePrice{
        font-size : 1.7rem;
        font-weight : 600;
        margin-top : 0.3rem;
        span {
            font-size : 0.8rem;
            margin-left : 6px;
        }
    }
`

export const StyledBookingInfoDiv = styled.div`
    width : 100%;
    height : ${(props)=> props.height || "max-content" } ;
    background-color : ${(props)=>props.backgroundColor || "#ffff"};
    border-radius : 0.5rem;
    margin : ${(props)=> props.margin || "0 0 0.5rem 0"};
    padding : ${(props)=> props.padding || "1rem" } ;
    display : flex;
    flex-direction : column;
    justify-content : ${(props)=> props.justifyContent || ""} ;
    align-items :${(props)=> props.alignItems || ""};
    gap: 8px;
    font-size : 1.2rem;
    color : var(--color-primary-head);

    .bookingInfoDiv{
        display : flex;
        flex-direction : column;
        gap : 1rem;
    }
    .bookingElementContainer{
        display : flex;
        flex-direction : column;

    } 
    .bookingElementTitle {
        display : flex;
        gap : 10px
    }
    .bookingElement {
        display : flex;
        flex-direction : row;
        align-items : center;
        justify-content : space-between ;
        p {
            font-size : 1rem;
            font-weight : 600;
        }
    }
    .selectedInfo {
        color : var(--color-primary);
        margin-top : 6px;
        font-size : 1rem;
        font-weight : 600;
    }
`

export const StyledPopupCard = styled.div`
    padding : 0.5rem;
    display : flex;
    flex-direction : column;


    position : absolute;
    width : max-content;
    height : max-content;
    margin-left : 1rem;
    left : 0;
    bottom :${(props)=>props.bottom || "3rem"};
    border-radius : 0.5rem;
    background-color : ${(props)=> props.backgroundColor || "#ffff"};

    -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.76);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.76);
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.76);

    .popupCardTitle{
        display : flex;
        justify-content : space-between;
        align-items : center;
        gap : 1rem;
    }

    .incriDecriContainer{
        display : flex;
        flex-direction : row;
        justify-content : center;
    }
`

export const StyledHeadingDiv = styled.div`
    font-size : ${(props)=>props.fontSize|| "1rem"};
    color : var(--color-primary-head);
    font-weight : 650;
    border-left : 4px solid var(--color-primary);
    padding-left : 0.5rem;
    margin : 0.3rem 0;
`

export const StyledDotedBox = styled.div`
    width : 100%;
    height : ${(props)=> props.height || "max-content" } ;
    background-color : ${(props)=>props.backgroundColor || "#ffff"};
    padding : ${(props)=> props.padding || "1rem" } ;
    display : flex;
    flex-direction : column;
    justify-content : ${(props)=> props.justifyContent || ""} ;
    align-items :${(props)=> props.alignItems || ""};
    gap: 12px;
    font-size : 1.2rem;
    color : var(--color-primary);
    box-sizing : border-box;
    border-top : 2px dashed gray;

    .totalPriseContainer{
        display : flex;
        flex-direction : row;
        justify-content : space-between;
        align-items : center;
    }
`

export const StyledTitleDiv = styled.div`

    font-size : ${(props)=>props.fontSize || "1rem"};
    color : ${(props)=>props.color || "black"};
    font-weight : ${(props)=>props.fontWeight || "500"};
    font-size : ${(props)=>props.fontSize || "1rem"};

    p {
        font-size : 0.8rem;
        margin-bottom : 2px;
        color : #244789 !important;
    };
    h1 {
        margin-bottom : 9px;
        font-size : ${props=>props.fontSizeH1 || '1.3rem'};
        background-color : #f7decc;
        border-radius : 6px;
        padding : 6px 8px;
    }

`

export const StyledBorderDiv = styled.div`

    display : flex;
    flex-direction : ${(props)=>props.flexDirection || "column"};
    align-items : flex-start;
    /* justify-content : space-evenly; */
    width : 100%;
    min-height : max-content;
    border : 1px dashed grey;
    border-radius : 0.6rem;
    padding : 6px;
    margin: ${(props)=>props.margin || "0"};
    transition: all 0.3s ease-in-out;
    gap : 0.6rem;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }
    .advancedInfoDiv{
        width : 100%;
        display : flex;
        flex-direction : row;
        justify-content : space-between !important;
    }
`
