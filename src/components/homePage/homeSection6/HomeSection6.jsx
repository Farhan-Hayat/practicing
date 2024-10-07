import React, { useState, useEffect } from "react";
import styles from "./homeSection6.module.css";
import "./test.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomeSection6 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/images/news/20240709/1.png?h=1188&w=1920&hash=BD9A78DD4C053283159DFF18A2923595",
      date: "09 July 2024",
      title:
        "Accelerating Global Startegy: Geely Radar First Overseas Subsidary Established in Thailand",
    },
    {
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/images/news/20240709/1.png?h=1188&w=1920&hash=BD9A78DD4C053283159DFF18A2923595",
      date: "09 July 2024",
      title:
        "Accelerating Global Startegy: Geely Radar First Overseas Subsidary Established in Thailand",
    },
    {
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/images/news/20240709/1.png?h=1188&w=1920&hash=BD9A78DD4C053283159DFF18A2923595",
      date: "09 July 2024",
      title:
        "Accelerating Global Startegy: Geely Radar First Overseas Subsidary Established in Thailand",
    },
    {
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/images/news/20240709/1.png?h=1188&w=1920&hash=BD9A78DD4C053283159DFF18A2923595",
      date: "09 July 2024",
      title:
        "Accelerating Global Startegy: Geely Radar First Overseas Subsidary Established in Thailand",
    },
  ];

  return (
    <div className={styles.HomeSection6}>
      <div className={styles.contentHolder}>
        <div className={styles.title}>
          <h1>Newsroom</h1>
        </div>
        <div className={styles.swiperContainer}>
          {width >= 768 && (
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              // breakpoints={{
              //   768:{
              //     slidesPerView:
              //   }
              // }}
              className={styles.mySwiper}
            >
              {data.length > 0 &&
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.newsItem}>
                      <div className={styles.newsImageHolder}>
                        <img src={item.imgURL} alt="" />
                      </div>
                      <div className={styles.date}>{item.date}</div>
                      <div className={styles.newsTitle}>{item.title}</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
          {width < 768 && data.length > 0 && (
            <div className={styles.verticalNews}>
              {data.map((item, index) => (
                <div className={styles.newsItem}>
                  <div className={styles.newsImageHolder}>
                    <img src={item.imgURL} alt="" />
                  </div>
                  <div className={styles.date}>{item.date}</div>
                  <div className={styles.newsTitle}>{item.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;
