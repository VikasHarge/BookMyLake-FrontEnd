import styled from "styled-components"



export const StyledInput = styled.input`
    width : 90%;
    height : 2rem;
    margin-bottom : 1.3rem;
    outline-style : none;
    border : none;
    border-bottom : 1.5px dashed gray;
    border-radius: 0.3rem;
    padding : 6px 10px;
    &:focus{
        border-bottom : 1.5px dashed var(--color-primary);
    }
`

export const StyledInputTextArea = styled.textarea`
    width : 80%;
    height : 2rem;
    margin-bottom : 1rem;
    outline-style : none;
    border : none;
    border-bottom : 1.5px dashed gray;
    border-radius: 0.3rem;
    padding : 6px 10px;
    &:focus{
        border-bottom : 1.5px dashed var(--color-primary);
    }
`

export const StyledLabel = styled.label`
    font-size : 14px;
    padding-bottom : 6px;
    margin-bottom : 4px;
    color : var(--color-primary-head);
    font-weight : 600;

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
    margin: 0.9rem 0  1.2rem 0;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }

    div{
        display : flex;
        justify-content : center;
        align-items : center;
    }

`
export const StyledLabelRadio = styled(StyledLabel)`
    margin : 0;
    padding : 0;
    margin-left : 0.2rem;
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
`