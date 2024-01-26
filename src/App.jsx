import car1 from "./images/car-1.jpeg";
import car2 from "./images/car-2.jpeg";
import car3 from "./images/car-3.jpeg";
import car4 from "./images/car-4.jpeg";
import car5 from "./images/car-5.jpeg";
import ImageSlider from "./ImageSlider";

const IMAGES = [car1, car2, car3, car4, car5];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "680px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
