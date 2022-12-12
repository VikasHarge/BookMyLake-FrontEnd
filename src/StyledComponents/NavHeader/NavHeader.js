import styled from "styled-components"


export const PageNavHeaderDiv = styled.div`
  width : 100%;
  height : ${(props) => props.height || "20vh"};
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), #E0E0E0);
  display : flex;
  text-align : center;
  flex-direction : column;
  align-items : flex-start;
  justify-content : flex-end;
  text-decoration : none;
  color : var(--color-primary-head);
  div {
    width : 100%;
    height : 20px;
    margin-bottom : 5px;
    color : var(--color-primary-head);
  }
  a {
      color : var(--color-primary-head)
    }
  a:hover{
    color : var(--color-secondary-dark)
  }
  p {
    display : flex;
    align-items : center;
    justify-content : center;
    color : var(--color-primary-head);
    font-size : 14px;
    font-weight : 600;
    span:nth-child(2) , span:nth-child(4) {
      color : var(--color-primary );
      display : flex;
      align-items : center;
      justify-content : center;
      margin : 0 4px;
    }
  }
`