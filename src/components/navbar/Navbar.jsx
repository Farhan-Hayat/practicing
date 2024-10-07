import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [displayMobileHeader, setDisplayMobileHeader] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.imageHolder}>
            <Link to={"/"}>
              <img
                src="https://www.riddara.com/-/media/project/riddara/logos/logo.svg?iar=0&hash=5B435DBB79054151213EECA23341BF52"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className={styles.headerMid}>
          <div className={styles.headerItems}>
            <div className={styles.headerItem}>
              <Link to={"/"}>Riddara Rd6</Link>
            </div>
            <div className={styles.headerItem}>
              <Link to={"/"}>About Riddara</Link>
            </div>
            <div className={styles.headerItem}>
              <Link to={"/"}>News Room</Link>
            </div>
            <div className={styles.headerItem}>
              <Link to={"/"}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.desktopContent}>
            <div className={styles.dropDown}>
              <FaEarthAmericas />
              <span>Global</span>
              <IoIosArrowDown />
              <div className={styles.dropDownContent}>
                <a href="#">Global - English</a>
                <a href="#">China - 中国人</a>
              </div>
            </div>
          </div>
          <div
            className={styles.mobileContent}
            onClick={() => setDisplayMobileHeader(true)}
          >
            <FiMenu />
          </div>
        </div>
      </div>

      <div
        className={`${styles.headerMobile} ${
          displayMobileHeader ? styles.showHeaderMobile : ""
        }`}
      >
        <div className={styles.headerTop}>
          <div
            className={styles.imageHolder}
          >
            <Link to={"/"}>
              <img
                src="https://www.riddara.com/-/media/project/riddara/logos/logo-black.svg?iar=0&hash=E95D94076A7B7E0D373B7037CA1B8112"
                alt="logo"
              />
            </Link>
          </div>
          <div
            className={styles.headerMobileCloseBtn}
            onClick={() => setDisplayMobileHeader(false)}
          >
            <IoMdClose />
          </div>
        </div>
        <div className={styles.headerMiddle}>
          <div>
            <Link to={"/"}>Riddara Rd6</Link>
            <IoIosArrowForward />
          </div>
          <div>
            <Link to={"/"}>About Riddara</Link>
            <IoIosArrowForward />
          </div>
          <div>
            <Link to={"/"}>News Room</Link>
            <IoIosArrowForward />
          </div>
          <div>
            <Link to={"/"}>Contact Us</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className={styles.headerBottom}>
          <p>China</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
