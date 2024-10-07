import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./homeSection2.module.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";


// SWIPER SLIDER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const carImages = [
  "https://www.riddara.com/-/media/project/riddara/images/home/cars/s3_car1_white.png?h=470&w=1302&hash=3067BAD3066D2BAA1EC3F914035B0A53",
  "https://www.riddara.com/-/media/project/riddara/images/home/cars/s3_car1_blue.png?h=470&w=1302&hash=3067BAD3066D2BAA1EC3F914035B0A53",
    "https://www.riddara.com/-/media/project/riddara/images/home/cars/s3_car1_black.png?h=470&w=1302&hash=3067BAD3066D2BAA1EC3F914035B0A53",
      "https://www.riddara.com/-/media/project/riddara/images/home/cars/s3_car1_green.png?h=470&w=1302&hash=3067BAD3066D2BAA1EC3F914035B0A53"
];

const HomeSection2 = () => {
  const getColorFromUrl = (url) => {
    const match = url.match(/car1_(\w+)\.png/);
    return match ? match[1] : 'default';
  };

  return (
    <div className={styles.HomeSection2}>
      <div className={styles.bgContainer}></div>
      <div className={styles.bgStrip}></div>
      <div className={styles.title}>
        <div>
          <h2>Diversified</h2>
        </div>
        <div>
          <h2>Color Scheme</h2>
        </div>
        <div>
          <h4>
            Explore More <FaLongArrowAltRight />
          </h4>
        </div>
      </div>
      <div className={styles.logoRD6}>
        <img
          src="https://www.riddara.com/assets/images/s3_bt.svg"
          alt="RD6 Logo"
        />
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          modules={[EffectFade, Navigation, Pagination]}
          className={styles.mySwiper}
          draggable={false}
          allowTouchMove={false}
          mousewheel={false}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          pagination={{
            el: `.${styles.swiperPagination}`,
            clickable: true,
            renderBullet: (index, className) => {
              const color = getColorFromUrl(carImages[index]);
              return `<div class="${className} ${styles.customBullet}" style="border-color: ${color};"> <div class="${styles.colorCont}" style="background-color: ${color};"></div> </div>`;
            },
          }}
        >
          {carImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.swiperImageHolder}>
                <img
                  className={styles.swiperImage}
                  src={image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperButtonNext}><IoMdArrowRoundForward /></div>
        <div className={styles.swiperButtonPrev}><IoMdArrowRoundBack /></div>
        <div className={styles.swiperPagination}></div>
      </div>
    </div>
  );
};

export default HomeSection2;
