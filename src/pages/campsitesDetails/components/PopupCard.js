import React from 'react'
import { StyledButton } from '../../../MainSite/dashboard-components/StyledComponents/Button/Button';
import { StyledHeadingDiv, StyledPopupCard } from '../../../StyledComponents/containers/Containers'
import { StyledIncriDicriDiv } from '../../../../src/StyledComponents/util/StyledUtils'


const  PopupCard = ({adultNum, setAdultNum, childrenNum, setChildrenNum, setShowGuestSelector, salePrise}) => {

  const btnStyle = {
    color : "#FA6500",
    fontSize : "12px",
    padding : "2px 6px",
  }


    const addAdult =  ()=>{
      if(adultNum >= 1){
        setAdultNum((adultNum => adultNum+=1))
      } 
    }
  
    const minusAdult =  ()=>{

      setAdultNum((adultNum)=>{
        if(adultNum >1){
          return (adultNum -= 1)
        } else {
          return (adultNum = 1)
        }
      })
      
    }

    const addChild =  ()=>{

        setChildrenNum((childrenNum => childrenNum+=1))
    
    }
  
    const minuChild =  ()=>{

      setChildrenNum((childrenNum)=>{
        if(childrenNum > 0){
          return (childrenNum -= 1)
        } else {
          return (childrenNum = 0 )
        }
      })
      
    }



  return (
    <StyledPopupCard bottom="8.5rem" >
      <div className='popupCardTitle' >
        <StyledHeadingDiv fontSize="1rem" >
          Select Number Of Guest
        </StyledHeadingDiv>
        <StyledButton
         color='#148d09' 
         fontSize="0.6rem" 
         padding="4px 6px" 
         onClick={()=>setShowGuestSelector(false)}

        >
          Done
        </StyledButton>  
      </div>

      <div className='incriDecriContainer' >
        <StyledIncriDicriDiv>
              <div className='increDecriTitleContainer' >
                  <p className='increDecriTitle' >Adults</p>
                  <p className='increDecriSubTitle' >{`x ₹${salePrise}/-`} </p>
              </div>
              <div className='increDecriBtn' >
                  <StyledButton {...btnStyle} 
                    onClick={addAdult}
                  >+</StyledButton>
                  <p className='guestOutput' >{adultNum}</p>
                  <StyledButton {...btnStyle} 
                    onClick={minusAdult}
                   >-</StyledButton>
              </div>
          </StyledIncriDicriDiv>
          <StyledIncriDicriDiv>
            <div className='increDecriTitleContainer' >
                <p className='increDecriTitle' >Childrens</p>
                <p className='increDecriSubTitle' >{`x ₹${salePrise}/-`} </p>
            </div>
            <div className='increDecriBtn' >
                <StyledButton {...btnStyle}
                  onClick={addChild}
                 >+</StyledButton>
                <p className='guestOutput' >{childrenNum}</p>
                <StyledButton {...btnStyle}  
                  onClick = {minuChild}
                >-</StyledButton>
            </div>
        </StyledIncriDicriDiv>
      </div>
    </StyledPopupCard>
  )
}

export default PopupCard;