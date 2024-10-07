import React from "react";
import styles from "./homeSection5.module.css";
const HomeSection5 = () => {
  return (
    <div className={styles.HomeSection5}>
        {/* <div className={styles.bgImage}>hello</div> */}
      <div className={styles.contentHolder}>
          <div className={styles.title}>
            <h1>INTELLIGENT AND ECO-FRIENDLY MANUFACTURING</h1>
          </div>
          <div className={styles.listHolder}>
            <div className={styles.listItem}>
              <h3>Customized Workshop</h3>
              <p>
                With the agile and intelligent final assembly line, we can meet
                the diversified and customized needs of consumers.
              </p>
            </div>
            <div className={styles.listItem}>
              <h3>Eco-friendly Workshop</h3>
              <p>
                With the state-of-art green film pre-treatment technology, we
                ensure a good anti-corrosion performance of the vehicle body,
                which meets the highest international standard of "no corrosion
                for 6 years and no rust penetration for 12 years".
              </p>
            </div>
            <div className={styles.listItem}>
              <h3>Comprehensive Test Track</h3>
              <p>
                We have the first comprehensive test track in China that
                integrates passenger vehicle performance testing, 100% electric
                vehicle intelligent testing, and off-road vehicle attribute
                testing.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomeSection5;
