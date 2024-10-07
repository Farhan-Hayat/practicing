import React from "react";
import styles from "./customBtn.module.css"

const CustomBtn1 = ({borders}) => {

  return (
    <div className={borders==="white"?`${styles.customBtn1} ${styles.whiteBorder}`:`${styles.customBtn1} ${styles.brownBorder}`}>
      <p>Explore More →</p>
    </div>
  );
};

export default CustomBtn1;
