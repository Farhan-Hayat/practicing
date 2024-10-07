import React, { useState } from "react";
import styles from "./homeSection4.module.css";
import CustomBtn1 from "../../customButton/CustomButton1";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
const HomeSection4 = () => {
  const [index, setIndex] = useState(1);
  const content = [
    {
      tag: "Night Intelligent Assistance",
      title: "ADB MATRIX LED HEADLIGHTS",
      list: [
        "326 LEDs loaded",
        "Adaptive front lighting system (AFS)",
        "Intelligent high beam control (IHC)",
      ],
      link: "#",
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/highdefinitionimages/home/s6pic2-homepage.jpg?h=1065&w=1602&hash=3D35DBD07C318C8ABF21E1F1D9ED27C8",
    },
    {
      tag: "800V DC Charge",
      title: "DISCHARGE DURING DRIVING, DIVERSIFIED USES",
      list: [
        "High-power discharge",
        "Intelligent discharge in all scenarios",
        "Safe discharge",
      ],
      link: "#",
      imgURL:
        "https://www.riddara.com/-/media/project/riddara/images/home/s6_pic1.png?h=1575&w=3000&hash=252DDE194B545BC2E0361C3D3FF6CB42",
    },
  ];

  const handleChangeIndex = () => {
    if (index === 1) {
      setIndex(2);
    } else {
      setIndex(1);
    }
  };

  return (
    <div className={styles.HomeSection4}>
      <section className={styles.section1}>
        <div className={styles.contentHolder}>
          <div className={styles.imageHolder}>
            <img
              src="https://www.riddara.com/-/media/project/riddara/highdefinitionimages/home/s5_pic1.png?h=840&w=640&hash=CA44D6D5C0230FB6696A2107CD0E2AF5"
              alt="Section4_img"
            />
          </div>
          <div className={styles.textHolder}>
            <div className={styles.tagHolder}>
              <p>M.A.P</p>
            </div>
            <div className={styles.title}>
              <h1>
                CHINA'S FIRST 100% ELECTRIC PICKUP TRUCK PLATFORM- MULTIPLEX
                ATTACHED PLATFORM (M.A.P)
              </h1>
            </div>
            <div className={styles.listHolder}>
              <ul>
                <li>
                  Three years of development, with an intensified testing
                  mileage of more than one million kilometers
                </li>
                <li>An advanced electric system and maximized space</li>
              </ul>
            </div>
            <div className={styles.customBtnHolder}>
              <CustomBtn1 borders={"brown"} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.contentHolder}>
          <div className={styles.textHolder}>
            <div className={styles.tagHolder}>
              <p>{content[index - 1].tag}</p>
            </div>
            <div className={styles.title}>
              <h1>{content[index - 1].title}</h1>
            </div>
            <div className={styles.listHolder}>
              <ul>
                {content[index - 1].list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.customBtnHolder}>
              <CustomBtn1 borders={"brown"} />
            </div>
          </div>
          <div className={styles.swiperHolder}>
            <div className={styles.imageHolder}>
              <img src={content[index - 1].imgURL} alt="section4_img3" />
            </div>
            <div className={styles.swiperBtnHolder}>
              <span className={styles.arrowHolder} onClick={handleChangeIndex}>
                <IoMdArrowRoundBack />
              </span>
              <span className={styles.numbering}>0{index}/02</span>
              <span className={styles.arrowHolder} onClick={handleChangeIndex}>
                <IoMdArrowRoundForward />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection4;
