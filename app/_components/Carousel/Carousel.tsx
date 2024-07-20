// import Swiper bundle with all modules installed
"use client";
import Swiper from "swiper/bundle";
import styles from "./Carousel.module.scss";

// import styles bundle
import "swiper/css/bundle";

const Carousel = () => {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoHeight: true,
    slidesPerView: 1,

    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const handleSlidePrev = () => {
    swiper.slidePrev();
  };

  return (
    <div className={styles.carouselWrapper}>
      <div>Carousel japp</div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        {/* <div className="swiper-pagination"></div> */}

        <button
          className="swiper-button-prev"
          onClick={() => swiper.slidePrev}
        />
        <button
          className="swiper-button-next"
          onClick={() => swiper.slideNext}
        />

        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};

export default Carousel;
