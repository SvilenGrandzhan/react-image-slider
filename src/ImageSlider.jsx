import { useState } from "react";
import { PropTypes } from "prop-types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import "./image-slider.css";

export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      }
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={imageUrls[imageIndex]}
        className="img-slider-img"
      />
      <button
        className="img-slider-btn"
        style={{ left: 0 }}
        onClick={showPreviousImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="img-slider-btn"
        style={{ right: 0 }}
        onClick={showNextImage}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}

ImageSlider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
