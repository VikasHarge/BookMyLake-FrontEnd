import React, { useContext, useState } from "react";
import { photoContext } from "../../../components/context/PhotoContext";

const PhotoSection = () => {
  const { imgArr } = useContext(photoContext);
  const [showImgPopup, setShowImgPopup] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const [arrlength, setArrLength] = useState(imgArr.length - 1);

  const showImg = (i) => {
    setShowImgPopup(true);
    setImgIndex(i);
  };

  console.log(imgIndex);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "fit-content",
        padding: "1rem 0",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        background : '#f5f5f5',
        justifyContent: "center",
      }}
    >
      {imgArr.map((img, i) => {
        return (
          <img
            key={i}
            src={img}
            className="photo-gal-img"
            onClick={() => showImg(i)}
          />
        );
      })}



      <div
        style={{
          visibility: showImgPopup ? "visible" : "hidden",
          position: "fixed",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(12px)",
          zIndex: "1000",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <img
          src={imgArr[imgIndex]}
          style={{
            position: "absolute",
            height: showImgPopup ? "90%" : "30%",
            opacity: showImgPopup ? 1 : 0,
            transform : showImgPopup? 'translateY(0%)' : 'translateY(-50%)',
            transition: "all 0.3s ease-in-out",
          }}
          className="popup-img"
        />

        <div
          onClick={() => setShowImgPopup(false)}
          style={{
            position: "absolute",
            top: "3rem",
            right: "3rem",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            backgroundColor: "lightgray",
            opacity: showImgPopup ? 1 : 0,
            display: showImgPopup ? "block" :  "none",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            color: "white",
            backgroundColor: "gray",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
            }}
          >
            X
          </p>
        </div>

        <div className="img-gal-nav-btn-con"
            style={{
                display: showImgPopup ? "flex" :  "none",
            }}
        >
          <p
            onClick={() => setImgIndex(()=>{
                if(imgIndex <= 0){
                    return arrlength;
                } else {
                    return imgIndex - 1;
                }
            })}
          >
            &lt;-
          </p>
          <p
            onClick={() => setImgIndex(()=>{
                if(imgIndex >= arrlength){
                    return 0;
                } else {
                    return imgIndex + 1;
                }
            })}
          >
            -&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
