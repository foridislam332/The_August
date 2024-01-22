import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCart from "./ItemCart";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const ItemCategory = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div key={item._id} className="outline-none">
            <ItemCart item={item} />
          </div>
        ))}
      </Slider>

      {/* Next and Prev buttons */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex space-x-4 z-10">
        <button
          className="bg-gray-500 text-white p-2 text-2xl glass hover:bg-black rounded-full"
          onClick={goToPrev}
        >
          <IoIosArrowBack />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex space-x-4 z-10">
        <button
          className="bg-gray-500 text-white p-2 text-2xl glass hover:bg-black rounded-full"
          onClick={goToNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ItemCategory;
