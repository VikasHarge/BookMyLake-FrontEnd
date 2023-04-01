import styled from "styled-components"



export const StyledInput = styled.input`
    width : ${(props)=>props.width || "100%"};
    height : ${(props)=>props.height || "2rem"};
    font-size : ${props=>props.fontSize || '1rem'};
    font-weight : ${props=>props.fontWeight || 'auto'}; 
    margin-bottom : 1.3rem;
    outline-style : none;
    border : none;
    border-bottom : ${(props)=>props.borderBottom || "1.5px dashed gray"};
    border-radius: 0.3rem;
    padding : ${(props)=>props.padding || "6px 10px"};
    background-color : ${(props)=>props.backgroundColor || "#ffff"};
    transition : all 0.3s;
    &:focus{
        border-bottom-color : var(--color-primary);
        background-color : ${(props)=>props.backgroundColorFocus || ""};        
    }
    @media screen and (max-width: 600px){

    width : ${(props)=>props.md_width || "100%"};
    height : ${(props)=>props.height || "2rem"};
        
    }
`

export const StyledInputTextArea = styled.textarea`
    width : ${(props)=>props.width || "100%"};
    height : 2rem;
    margin-bottom : 1rem;
    outline-style : none;
    border : none;
    border-bottom : 1.5px dashed gray;
    border-radius: 0.3rem;
    padding : 6px 10px;
    transition : all 0.3s;
    &:focus{
        border-bottom : 1.5px dashed var(--color-primary);
    }
    @media screen and (max-width: 600px){
        width : ${(props)=>props.md_width || "100%"};
        height : ${(props)=>props.height || "2rem"};
        margin-bottom : 0;
    }
`

export const StyledLabel = styled.label`
    font-size : 14px;
    margin : ${(props)=>props.margin || "0 0 0 0"};
    padding : ${(props)=>props.padding || "0 0 0 0"};
    color : var(--color-primary-head);
    font-weight : 600;
    transition : all 0.3s;
    span{
        font-size : 10px;
    }
`

export const RadioDiv = styled.div`
    display : flex;
    align-items : flex-start;
    justify-content : space-evenly;
    width : inherit;
    min-height : max-content;
    border : 1px dashed grey;
    border-radius : 0.6rem;
    padding : 6px;
    margin: ${(props)=>props.margin || "0.9rem 0  1.2rem 0"};
    transition : all 0.3s;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }

    .radioInputContainer{
        display : flex;
        justify-content : center;
        align-items : center;
    }

`
export const StyledLabelRadio = styled(StyledLabel)`
    margin : 0;
    padding : 0;
    margin-left : 0.2rem;
    transition : all 0.3s;

`

export const StyledInputRadio = styled.input`

    margin : 0 3px;

`

export const FileDiv = styled(RadioDiv)`
    height : auto;
    display : flex;
    align-items: flex-start;
    justify-content: space-evenly;
    align-content: normal;
    flex-direction: column;
    transition : all 0.3s;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }

    div{
        display : flex;
        justify-content : center;
        align-items : center;
        height : 50px;
    }
`

export const StyledFileInput = styled(StyledInput)`
    margin-bottom : 0;
    width : 100%;
    transition : all 0.3s;
`