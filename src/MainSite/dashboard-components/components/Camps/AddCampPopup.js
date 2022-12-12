import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {StyledButton, StyledSubmitButton} from "../../StyledComponents/Button/Button";
import { StyledInput, StyledLabel, StyledInputTextArea, RadioDiv, StyledLabelRadio, StyledInputRadio, StyledFileInput, FileDiv } from "../../StyledComponents/input/Form";
import Tags from "./Tags";
import { ToastContainer } from "react-toastify";


const StyledOverly = styled.div`
  position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  transition: opacity 500ms;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 5s ease-in-out;
`;
const PopupDiv = styled.div`
  border-radius: 0.6rem;
  padding: 20px;
  background-color: #ffff;
  width: 55%;
  height: max-content;
  position: relative;
  transition: all 5s ease-in-out;
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);
  font-size: 0.6rem;
  margin-bottom : 16px;
`;

const FromStyled = styled.form`
  width : 100%;
  height : max-content;
  display : grid;
  grid-template-columns : 50% 50%;
  background-color : rgba(145, 158, 171, 0.1);
  padding : 1rem 0;
  border-radius : 0.6rem;
`
const FormInputLeft = styled.div`
  /* background-color : red; */
  /* border-right : 1px dashed red; */
  display : flex;
  flex-direction : column;
  padding : 0.4rem 0.8rem;
`





const AddCampPopup = ({ setShowPopUp }) => {

  const [tags, setTags] = useState([]);

  const [campName, setCampName] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [images, setImages] = useState([]);




  return (
    <>
      <StyledOverly>
        <PopupDiv className="popup">
          <HeadingDiv>
            <h1>Add New Camp Site</h1>
            <StyledButton onClick={() => setShowPopUp(false)} color="red">
              Close
            </StyledButton>
          </HeadingDiv>
          <FromStyled>
            <FormInputLeft>
              {/* Camp Name */}
              <StyledLabel
                for="camp_name"
                >
                  Camp Site Name  <span> (eg. Camp A - Dreamy Nights)</span>
                </StyledLabel>
              <StyledInput 
                type='text' 
                id="camp_name"
                name="camp_name"
              />

              {/* Max Price */}
              <StyledLabel
                for="max_price"
                >
                  Max Price 
                </StyledLabel>
              <StyledInput 
                type='number' 
                id="max_price"
                name="max_price"
                min={0}
              />

              {/* Sale Prise */}
              <StyledLabel
                for="sale_price"
                >
                 Sale Price 
                </StyledLabel>
              <StyledInput 
                type='number' 
                id="sale_price"
                name="sale_price"
                min={0}
              />

              {/* Sale Prise */}
              <StyledLabel
                for="Description"
                >
                 Description
                </StyledLabel>
              <StyledInputTextArea 
                id="Description"
                name="Description"
              />

              
            </FormInputLeft>

            <FormInputLeft>
              {/* Tags */}
              <Tags tags={tags} setTags={setTags} />



              {/* Status */}
            <RadioDiv>
              <div>
                <StyledInputRadio 
                  type='radio' 
                  id="active"
                  name="status"
                  value='active'
                />
                <StyledLabelRadio
                  for="active"
                  >
                    Active
                </StyledLabelRadio>
              </div>

              <div>
                <StyledInputRadio 
                  type='radio' 
                  id="inactive"
                  name="status"
                  value='inactive'
                />
                <StyledLabelRadio
                  for="active"
                  >
                    In-active
                </StyledLabelRadio>
              </div>
            </RadioDiv>

            <FileDiv>
              <div>

              </div>
              <StyledFileInput
                type='file'
                name = "camp_photos"
                accept = "image/*"
                // onChange = {registerDataChange }
              >
              </StyledFileInput>
            </FileDiv>
            <StyledSubmitButton onClick={(e)=>e.preventDefault()} >
              Submit
            </StyledSubmitButton>
            </FormInputLeft>

          </FromStyled>

        </PopupDiv>
      </StyledOverly>
    </>
  );
};

export default AddCampPopup;
