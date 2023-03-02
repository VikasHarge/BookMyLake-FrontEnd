import styled from "styled-components";
import footerImg  from '../../../media/gallery/banner.jpg';


export const StyledFooterComponent = styled.div`
    width : 100%;
    height : fit-content;
`

export const StyledFooterContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || 'max-content'};
    border-radius : ${props=>props.borderRadius || '0'};
    background-color : ${props=>props.backgroundColor || "#ffff"};

`

export const StyledFooterImg = styled.div`
    width : 100%;
    height : ${(props)=>props.height || 'max-content'};
    background-image : url(${props=>props.backgroundImg});
    border-radius : ${props=>props.borderRadius || '0'};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y : -25rem;


    //inner shadow green
    -webkit-box-shadow: inset 6px -141px 186px 144px rgba(125,41,1,0.98);
    -moz-box-shadow: inset 6px -141px 186px 144px rgba(0,79,50,0.98);
    box-shadow: inset 6px -141px 186px 144px rgba(0,79,50,0.98);

        //inner shadow black
        /* -webkit-box-shadow: inset 6px -141px 186px 144px rgba(0,0,1,0.98);
    -moz-box-shadow: inset 6px -141px 186px 144px rgba(0,0,1,0.98);
    box-shadow: inset 6px -141px 186px 144px rgba(0,0,1,0.98); */

        //inner shadow orange
        /* -webkit-box-shadow: inset 6px -141px 186px 144px rgba(125,41,1,0.98);
    -moz-box-shadow: inset 6px -141px 186px 144px rgba(125,41,1,0.98);
    box-shadow: inset 6px -141px 186px 144px rgba(125,41,1,0.98) */

    @media screen and (max-width : 600px) {

        width : 100%;
        height : ${(props)=>props.height || 'max-content'};
        background : url(${props=>props.backgroundImg});
        border-radius : ${props=>props.borderRadius || '0'};
        background-repeat: no-repeat;
        background-size : cover;
        background-position : center;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;


        .Footerabsolute{
            width : 100vw;
            backdrop-filter : blur(10px);
            -webkit-backdrop-filter : blur(10px);
            background-color : rgb(0,79,50, 0.8);
            border-radius : 2rem 2rem 0 0;

        }


    }

`

export const StyledFooterSectionContainer = styled.div`
    width : 100%;
    height : 100%;
    padding : ${props=>props.padding || '2rem'};
    display : grid;
    grid-template-columns : repeat(4, 1fr);

    @media screen and (max-width : 600px) {
        grid-template-columns : 1fr;
        align-items : center;        
    }

`
export const StyledFooterSection = styled.div`
    color : #fff;
    .addressP{
        font-size : 0.9rem;
        padding : 1rem 0.5rem;
    }
    h1 {
        color : #fff;
        font-size : 1.3rem;
        padding-left : 0.6rem;
        border-left : 0.3rem solid var(--color-primary);
    }
    ul {
        padding : 1rem;
        font-size : 0.9rem;
    }
    li {
        padding-bottom : 0.5rem;
        cursor: pointer;
        text-decoration : none;
        display : flex;
        flex-direction : row;
        justify-content : start;
        align-items : center;
        gap : 6px;
        transition : all 0.3s;
        &:hover {
            padding-left : 8px;
            opacity : 0.9;
        }
    }
    small {
        font-size : 1rem;
        color : #00eb95;
    }
    .linkP {
        cursor: pointer;
        color : inherit;
        text-decoration : inherit;
        transition : all 0.3s;
        &:hover {
            padding-left : 8px;
            opacity : 0.9;
        }
    }
    .socialIconsList {
        font-size : 2rem;
        margin-top : 1rem;
        width : 80%;
        display : flex;
        flex-direction : row;
        gap : 0.5rem;
        svg {
            padding-top : 0.5rem;
            cursor: pointer;
            transition : all 0.4s;
            &:hover {
                padding-top : 0rem;
                padding-bottom : 0.5rem;
                opacity : 0.8;
                /* color : var(--color-primary); */
                color : #00eb95;
            }
        }
    }

    @media screen and (max-width : 600px) {

        .footer_logo{
            width : 100%;
            display : flex;
            flex-direction : column;
            text-align : center;
            justify-content : center;
            align-items : center;
            img{
                width :70%;
            }
        }
        .addressP {
            text-align : center;
            margin-bottom : 0.5rem;
            font-size : 0.6rem;
        }
        .socialIconsList {
            margin-bottom : 1.5rem;
            justify-content : center;
        }

        .footercontact{
            width : 100%;
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content : center;

        }

        
    }

`
export const StyledCopyright = styled.div`
    width : 100%;
    border-top : 2px solid #023421;
    color : gray;
    font-size : 0.9rem;
    text-align : center;
    padding : 1rem;
    h1 {
        font-size : 0.9rem;
    }
    a {
        color : var(--color-primary);
        cursor: pointer;
    }
    small {
        font-size : 1.2rem;
        color : var(--color-pink)
    }
    @media screen and (max-width : 600px) {
        h1 {
            font-size : 0.7rem;
        }
        small {
        font-size : 1rem;
        }
        padding-bottom : 10vh;
        
    }

`
