"use client"; // <===== REQUIRED

import styles from "./Carousel.module.scss";
import "./Carousel.module.css";
// import function to register Swiper custom elements

// const CarouselTest = () => {
//   return (
//     <div className={styles.carouselWrapper}>
//       <div>Carousel japp</div>
//       <swiper-container slides-per-view="1" navigation="true">
//         <swiper-slide>Slide 1</swiper-slide>
//         <swiper-slide>Slide 2</swiper-slide>
//         <swiper-slide>Slide 3</swiper-slide>
//       </swiper-container>
//     </div>
//   );
// };

// export default CarouselTest;

// Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";
import useIsMobile from "@/app/_utilites/useIsMobile";
register();

// import "swiper/css/pagination";

// Our custom button component
// import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  // tagline: string;
  image: string;
  // buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

// slidesPerView={3}
// centeredSlides={true}

const CarouselTest: React.FC<DemoSliderProps> = ({ data }) => {
  const { isMobile } = useIsMobile();
  // const swiperRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   const params = {
  //     navigation: true,
  //     slidesPerView: 3,
  //     centeredSlides: true,
  //     spaceBetween: 50,
  //     slideActiveClass: `${styles.activeSlide}`,
  //     slideNextClass: `${styles.nextSlide}`,
  //     slidePrevClass: `${styles.prevSlide}`,
  //     injectStyles: [
  //       `
  //         .swiper-button-next,
  //         .swiper-button-prev {
  //           height: 160px;
  //           width: 75px;
  //           padding: 8px 16px;
  //           color: black;
  //         }
  //     `,
  //     ],
  //   };

  //   if (!swiperContainer) return;
  //   Object.assign(swiperContainer, params);
  //   //@ts-ignore next-line
  //   swiperContainer.initialize();
  // }, []);

  // return (
  //   <section className={styles.swiperWrapper}>
  //     <ul>
  //       <swiper-container
  //         navigation="true"
  //         ref={swiperRef}
  //         init="false"
  //         // slides-per-view="3"
  //         // initialSlide={1}
  //         // init={false}
  //         className={`${styles.swiper} custom-swiper-slide`}
  //       >
  //         {data.map(({ id, title, image }) => (
  //           <swiper-slide key={id} className="custom-swiper-slide">
  //             <div>
  //               <h2>{title}</h2>
  //               <img src={image} />
  //             </div>
  //           </swiper-slide>
  //         ))}
  //       </swiper-container>
  //     </ul>
  //   </section>
  // );
  return (
    <section className={styles.swiperWrapper}>
      <ul>
        <Swiper
          navigation={!isMobile}
          slidesPerView={isMobile ? 1.2 : 3}
          centeredSlides={true}
          spaceBetween={30}
          slideActiveClass={styles.activeSlide}
          slideNextClass={styles.nextSlide}
          slidePrevClass={styles.prevSlide}
          // initialSlide={1}
          // init={false}
          className={`${styles.swiper} custom-swiper-slide`}
        >
          {data.map(({ id, title, image }) => (
            <SwiperSlide key={id} className="custom-swiper-slide">
              <div>
                <h2>{title}</h2>
                <img src={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default CarouselTest;
