import React, { useState } from "react";
import { Wrapper } from './styled'

const ImageSlider = ({ images }) => { // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <Wrapper>
        <img style={{ height: '400px'}} src={images[index]} alt={index} />
        <img className="secondImage" style={{ height: '400px'}} src={images[index + 1]} alt={index + 1} />
        <div className="arrow" >
            <button onClick={slideLeft}>{"<"}</button>
            <button onClick={slideRight}>{">"}</button>
        </div>
      </Wrapper>
    )
  );
};

export default ImageSlider;