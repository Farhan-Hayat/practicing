import React, { useState } from "react";
import styles from "./homeSection1.module.css";
import { FiVolume2 } from "react-icons/fi";
import { CgScrollV } from "react-icons/cg";
import { FiVolumeX } from "react-icons/fi";

const HomeSection1 = () => {
  const [muted, setMuted] = useState(true);
  return (
    <section className={styles.HomeSection1}>
      <div className={styles.video}>
        <div className={styles.videoHolder}>
          <video
            autoPlay
            loop
            muted={muted}
            playsInline
            className={styles.video__content}
            src="https://oss-geelypk-inter-product.oss-ap-southeast-1.aliyuncs.com/video/rd6-tvc.mp4"
            type="video/mp4"
          />
        </div>
      </div>
      <div className={styles.box1}>
        <div className={styles.volumeSvg} onClick={() => setMuted(!muted)}>
          {muted ? <FiVolumeX /> : <FiVolume2 />}
        </div>
        <div className={styles.scrollSvg}>
          <CgScrollV />
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.box2Content}>
          <div className={styles.imageCont}>
            <img
              src="https://www.riddara.com/-/media/project/riddara/images/home/union.png?h=41&w=430&hash=F37BD82071DAC898DD3F6DFA50B08039"
              alt="box2Logo"
            />
          </div>
          <div className={styles.punchLine}>
            <p>An intelligent EV brand focusing on the outdoor ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
