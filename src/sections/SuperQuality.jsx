import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold  lg:max-w-lg">
          We provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into luxury with our meticulously crafted footwear, designed to
          elevate your experience with premium comfort, style, and unmatched
          quality.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensres your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
}
