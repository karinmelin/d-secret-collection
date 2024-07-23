"use client";

import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./Carousel.module.scss";

import { register } from "swiper/element/bundle";
import useIsMobile from "@/app/_utilites/useIsMobile";
import { Card } from "./_components/Card";
import useIsTablet from "@/app/_utilites/useIsTablet";
register();

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
}

interface CarouselProps {
  slides: Slide[];
}

const CarouselTest: FunctionComponent<CarouselProps> = ({ slides }) => {
  const { isMobile } = useIsMobile();
  const { isTablet } = useIsTablet();

  return (
    <section className={styles.swiperWrapper}>
      <ul>
        <Swiper
          navigation={!isMobile && !isTablet}
          slidesPerView={isMobile || isTablet ? 1.3 : 1.7}
          centeredSlides={true}
          spaceBetween={20}
          slideActiveClass={styles.activeSlide}
          slideNextClass={styles.nextSlide}
          slidePrevClass={styles.prevSlide}
          watchOverflow={true}
          className={`${styles.swiper} custom-swiper`}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id} className="custom-swiper-slide">
              <Card
                {...slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default CarouselTest;
