import React, { useRef, useState } from "react";

import "./carousel.css";
const defaultFunction =()=>{

}

export const Carousel = ({ imageList = [] , onDelete = defaultFunction, defaultImage, onSave = defaultFunction, circleCount= 5, imageWidth = 90}) => {
  const [page, setpage] = useState(0);
  const carouselRef = useRef();

  const scrollToRight = () => {
    const nextPage = page + 1;
    // console.log({ image, nextPage, carouselRef });
    if (imageList.length > nextPage) {
      carouselRef.current.children[nextPage].scrollIntoView()
      window.scrollTo(0,0);
      setpage(nextPage);
      // console.log(nextPage);
    }
  };

  const scrollToLeft = () => {
    const prevPage = page - 1;

    if (prevPage >= 0) {
      carouselRef.current.children[prevPage].scrollIntoView();
      window.scrollTo(0,0);
    }
    setpage(prevPage);
  };

  const handleOnDelete = () => { 
    onDelete(imageList.filter((image, index) => index !== page));
    setpage(0);
  }

  const handelOnSave = () => {
    onSave(imageList[page])
  }


   const imageWidthMap = {
    100:"carousal-image-width-100",
    90: "carousal-image-width-90"
   }


  return (
    <>
    
      <div className="carousel-container">

        {
          <>        
          <div ref={carouselRef} className="image-container">

            {
              imageList.length>0 ? ( imageList.map((image, index) => {
                return <img className={`carsousel-image ${imageList.length>1 && imageWidthMap[imageWidth]}`} src={image.url} key={index} />;
              })) : (
                <div className="default-image-outer">
                <img className="default-image" src = {defaultImage} alt="No Image" />
                </div>
              )
            }
         
        </div>
        {
          imageList.length >0 && (<>
          
        <div className="arrow carsouel-left-arrow" onClick={scrollToLeft}>
          ←
        </div>
        <div className="arrow carsouel-right-arrow" onClick={scrollToRight}>
          →
        </div>

        <div className="cross-button" onClick={handleOnDelete}>
        Delete
        </div>

        <div className="save-button" onClick ={handelOnSave}>Save</div>

        <div className="carousel-circle-container">
        {imageList.slice(0, circleCount).map((img ,index) => {
          return (
          <div key ={index} className={`carousel-circle ${page === index && (`carousel-circle-active`)}`}>

          </div>
          )}) 
        }
        </div>
        

        
          </>)
        }


          </>
        }
        
      </div>
    </>
  );
};

// export default Carousel
 