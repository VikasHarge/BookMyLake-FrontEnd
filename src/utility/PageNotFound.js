import React from 'react'
import { StyledBodyContainer, StyledWhiteContainer } from '../StyledComponents/containers/Containers'

const PageNotFound = () => {
  return (
    <div style={
        { 
            width : '100%', 
            height : '60vh', 
            backgroundColor : "white",
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
        }} 
    >
        <h1
            style={{
                fontSize : '1rem',
                padding : '1.5rem',
                border : '2px solid red',
                borderRadius : '1rem',
                color : 'red'
            }}
        >Error 404 : Page Not Found</h1>
    </div>
  )
}

export default PageNotFound