import React from "react";
import styles from "./Footer.module.scss";
import {instagram, youtube, facebook} from '../../assets/images';

const Footer = () => {
  return (
    <div className={`row ${styles.Footer}`}>
      <div className={`col-6 ${styles.left}`}>Your Smile, Our Passion</div>
      <div className={`col-6 ${styles.right}`}>
              <div>
                  <img className={styles.socialMediaImg} src={instagram} alt="instagram"/>
                  <img className={styles.socialMediaImg} src={youtube} alt="youtube"/>
                  <img className={styles.socialMediaImg} src={facebook} alt="facebook"/>
        </div>
        <div>Best Start Up of 2023</div>
      </div>
      <div className="col-6"></div>
    </div>
  );
};

export default Footer;
