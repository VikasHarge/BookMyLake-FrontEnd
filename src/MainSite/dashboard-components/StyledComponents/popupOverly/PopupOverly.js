import styled from "styled-components";

export const StyledOverly = styled.div`
  position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  transition: opacity 500ms;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
    @media screen and (max-width : 600px) {
      justify-content : center;
      align-items : flex-start;
      padding-top : 2.5rem;
    }
`;


export const PopupDiv = styled.div`
  border-radius: 1rem;
  padding: ${(props)=>props.padding || "20px"};
  background-color:${(props)=>props.backgroundColor || "#ffff"};
  width: ${(props)=>props.width || "55%"};
  height: ${(props)=>props.height || "max-content"};
  position: relative;
  
  @media screen and (max-width : 600px) {
    width : 90%;
    height: ${(props)=>props.md_height || "80vh"};
  }
`;
