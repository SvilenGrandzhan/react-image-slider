import car1 from "./images/car-1.jpeg";
import car2 from "./images/car-2.jpeg";
import car3 from "./images/car-3.jpeg";
import car4 from "./images/car-4.jpeg";
import car5 from "./images/car-5.jpeg";
import ImageSlider from "./ImageSlider";

const IMAGES = [car1, car2, car3, car4, car5];

export default function App() {
  return (
    <div className="max-w-2xl w-full aspect-[4/3] mx-auto my-0">
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}

// className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer hover:bg-black opacity-20"
// className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer hover:bg-black opacity-20"
