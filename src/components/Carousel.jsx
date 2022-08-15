import React from "react";
import tfcNash from "../assets/livpool.jpg";
import laLoss from "../assets/laLoss.jpg";
import lafcSalt from "../assets/lafcSalt.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgCarousel = () => {
  return (
    <div name="carousel" className="pt-5 w-[45%] pb-5">
      <Carousel
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={tfcNash} alt="/" />
          <div className=" bg-black/70 text-white">
            <p>Liverpool draws Fulham</p>
          </div>
        </div>

        <div>
          <img src={laLoss} alt="/" />
          <div className=" bg-black/70 text-white">
            <p>Newcastle defeats Nottingham</p>
          </div>
        </div>
        <div>
          <img src={lafcSalt} alt="/" />
          <div className=" bg-black/70 text-white">
            <p>Tottenham hands Southampton loss</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
