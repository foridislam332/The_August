import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCart from "./ItemCart";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ItemCategory = ({ items }) => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
  };

  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setSlidesToShow(4);
    } else if (windowWidth >= 768) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2);
    }
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial calculation

    // Update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div key={item._id}>
            <ItemCart item={item} />
          </div>
        ))}
      </Slider>

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
