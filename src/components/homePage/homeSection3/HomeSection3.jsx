import React from "react";
import styles from "./homeSection3.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import CustomBtn1 from "../../customButton/CustomButton1";

const HomeSection3 = () => {
  return (
    <div className={styles.HomeSection3}>
      <div className={styles.textHolder}>
        <div className={styles.title}>
          <h1>Unbounded</h1>
        </div>
        <div className={styles.punchLine}>
          <p>
          We offer diversified modification solutions, creating more free outdoor experiences with the spirit of exploring and breaking boundaries.
          </p>
        </div>
        <div className={styles.customBtnHolder}>
          <CustomBtn1 borders={"white"}/>
        </div>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.swiperVideoHolder}>
              <video src="https://oss-geelypk-inter-product.oss-ap-southeast-1.aliyuncs.com/video/home_s3_01.mp4"autoPlay loop muted></video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperVideoHolder}>
              <video src="https://oss-geelypk-inter-product.oss-ap-southeast-1.aliyuncs.com/video/home_s3_02.mp4"autoPlay loop muted></video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperVideoHolder}>
              <video src="https://oss-geelypk-inter-product.oss-ap-southeast-1.aliyuncs.com/video/home_s3_03.mp4"autoPlay loop muted></video>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSection3;
