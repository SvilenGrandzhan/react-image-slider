import { useState } from "react";
import { PropTypes } from "prop-types";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";

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
      <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
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
      <dir
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </dir>
    </div>
  );
}

ImageSlider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
