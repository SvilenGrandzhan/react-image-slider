import { useState } from "react";
import { PropTypes } from "prop-types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="w-full h-full relative">
      <img
        src={imageUrls[imageIndex]}
        className="object-cover w-full h-full block"
      />
      <button className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer hover:bg-black hover:opacity-20">
        <ArrowBigLeft />
      </button>
      <button className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer hover:bg-black hover:opacity-20">
        <ArrowBigRight />
      </button>
    </div>
  );
}

ImageSlider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
