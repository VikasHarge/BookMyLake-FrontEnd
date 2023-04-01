import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {StyledButton, StyledSubmitButton} from "../../StyledComponents/Button/Button";
import { StyledInput, StyledLabel, StyledInputTextArea, RadioDiv, StyledLabelRadio, StyledInputRadio, StyledFileInput, FileDiv } from "../../StyledComponents/input/Form";
import Tags from "./Tags";


import { StyledOverly, PopupDiv } from "../../StyledComponents/popupOverly/PopupOverly";


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
  @media screen and (max-width: 600px) {
    display : flex;
    flex-direction : column;
    height : fit-content
  }
`
const FormInputLeft = styled.div`
  /* background-color : red; */
  /* border-right : 1px dashed red; */
  display : flex;
  flex-direction : column;
  padding : 0.4rem 0.8rem;
`





const AddCampPopup = ({ setShowPopUp, showPopUp }) => {

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
        <PopupDiv
          md_height="fit-content"
          style={{
            position : 'absolute',
            visibility : showPopUp ? 'visible' : 'hidden',
            opacity : showPopUp ? '1' : '0',
            scale : showPopUp ? '1' : '0.9',
            transition: 'all 0.3s ease-in-out',
          }}
         >
        
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
                margin="0 0 4px 0"
                padding="0 0 6px 0"

                >
                  Camp Site Name  <span> (eg. Camp A - Dreamy Nights)</span>
                </StyledLabel>
              <StyledInput 
                type='text' 
                id="camp_name"
                name="camp_name"
                width = "90%"
              />

              {/* Max Price */}
              <StyledLabel
                for="max_price"
                margin="0 0 4px 0"
                padding="0 0 6px 0"
                >
                  Max Price 
                </StyledLabel>
              <StyledInput 
                type='number' 
                id="max_price"
                name="max_price"
                min={0}
                width = "90%"
              />

              {/* Sale Prise */}
              <StyledLabel
                for="sale_price"
                margin="0 0 4px 0"
                padding="0 0 6px 0"
                >
                 Sale Price 
                </StyledLabel>
              <StyledInput 
                type='number' 
                id="sale_price"
                name="sale_price"
                min={0}
                width = "90%"
              />

              {/* Sale Prise */}
              <StyledLabel
                for="Description"
                margin="0 0 4px 0"
                padding="0 0 6px 0"
                >
                 Description
                </StyledLabel>
              <StyledInputTextArea 
                id="Description"
                name="Description"
                width = "80%"
              />

            </FormInputLeft>

            <FormInputLeft>
              {/* Tags */}
              <Tags tags={tags} setTags={setTags} />



              {/* Status */}
            <RadioDiv>
              <div className="radioInputContainer" >
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

              <div className="radioInputContainer" >
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
