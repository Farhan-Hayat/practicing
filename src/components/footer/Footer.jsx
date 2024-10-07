import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.wrap}>
        <div className={styles.cont1}>
          <div className={styles.logoHolder}>
            <img
              src="https://www.riddara.com/-/media/project/riddara/logos/logo.svg?iar=0&hash=5B435DBB79054151213EECA23341BF52"
              alt="footerLogo"
            />
          </div>
          <div className={styles.LinksHolder}>
            <ul>
              <li>
                <a href="#">ABOUT RIDDARA</a>
              </li>
              <li>
                <a href="#">ABOUT RIDDARA</a>
              </li>
              <li>
                <a href="#">ABOUT RIDDARA</a>
              </li>
              <li>
                <a href="#">ABOUT RIDDARA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.cont2}>
          <div className={styles.socialLinksHolder}>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.privacyPolicyHolder}>
          <h4>© 2024 Riddara. All Rights Reserved.</h4>
          <h3>Cookiey Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
