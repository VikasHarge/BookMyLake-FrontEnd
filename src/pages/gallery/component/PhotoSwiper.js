import ImageCard from "./ImageCard";
import Carousel from "./Carousel";




const PhotoSwiper = () => {

    const slides = [
      {
        key : 1,
        
        content : (
          <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1671304133/campimages/banner_zxhuzx.jpg'  />
        )
      },
      {
        key : 2,
        
        content : (
           <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1677659373/avatars/giksl6sodrzp6mbscg7n.jpg'  />
        )
      },
      {
        key : 3,
        
        content : (
           <ImageCard imagen='https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        )
      },
      {
        key : 4,
        
        content : (
           <ImageCard imagen='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'  />
        )
      },
      {
        key : 5,
        
        content : (
           <ImageCard imagen='https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'  />
        )
      },      
      {
        key : 6,
        
        content : (
           <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1671304133/campimages/img4_poyrap.jpg'  />
        )
      },
      {
        key : 7,
        
        content : (
           <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1671304133/campimages/img4_poyrap.jpg'  />
        )
      },
      {
        key : 8,
        
        content : (
           <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1671304133/campimages/img4_poyrap.jpg'  />
        )
      },
      {
        key : 9,
        
        content : (
           <ImageCard imagen='https://res.cloudinary.com/dwydfpcek/image/upload/v1671304133/campimages/img4_poyrap.jpg'  />
        )
      },
      ];


  return (
    <>
    <div>
    <Carousel 
      cards={slides} 
      offset={2}
      showArrows={false}
      height = "80vh"
      width = "90%"
      margin = "0 auto" 
    />
    </div>

    </>
  )
}

export default PhotoSwiper




{/* <div className="photo-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${
              index === currentIndex ? 'active' : ''
            } ${
              index === currentIndex - 1 ||
              (currentIndex === 0 && index === images.length - 1)
                ? 'prev'
                : ''
            } ${
              index === currentIndex + 1 ||
              (currentIndex === images.length - 1 && index === 0)
                ? 'next'
                : ''
            }`}
          >
            <img src={image} className='sliderImg' alt={`Image ${index}`} />
            <p>{index}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div> */}