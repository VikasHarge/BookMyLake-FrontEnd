import React from "react";

const PageHeading = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        display : 'flex',
        padding: "1rem",
        justifyContent : 'center',
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "0 0.8rem",
          fontSize : '2rem',
          color :'#244789',
          borderLeft : '0.4rem solid #FA6500'
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default PageHeading;
