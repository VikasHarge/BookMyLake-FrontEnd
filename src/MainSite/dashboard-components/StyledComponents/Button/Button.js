import styled from "styled-components";

export const StyledButton = styled.button`
  display : inline-block;
  text-decoration : none;
  font-size : ${(props)=>props.fontSize || "0.8rem"};
  border: none;
  list-style: none;
  padding: ${(props)=>props.padding || "6px 8px"};
  margin : 5px;
  background-color: ${(props)=> props.color || "#244789"};
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: #ffff;
    border: 1px solid ${(props)=> props.color || "#244789"};
    color: ${(props)=> props.color || "#244789"};
  }
`;


export const StyledSubmitButton = styled(StyledButton)`
    background-color: green;
    padding: 10px 8px;
    width : auto;
    &:hover {
        border: 1px solid green;
        color : green;
    }

`