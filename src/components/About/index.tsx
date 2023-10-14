import styles from "./About.module.scss";
import {
  logo,
  tech,
  tooth,
  dna,
  shape,
  img13,
  img11,
  img2,
  img12,
  img9,
  img6,
} from "../../assets/images";
import { RefObject } from "react";
import Footer from "../../components/Footer";
type AboutProps = {
  aboutRef: RefObject<HTMLDivElement>;
};
const About = ({ aboutRef }: AboutProps) => {
  const imgaes = [
    { name: "tech", src: tech },
    { name: "tooth", src: tooth },
    { name: "dna", src: dna },
  ];
  const images2 = [
    {
      name: "img1",
      src: img11,
    },
    {
      name: "img2",
      src: img2,
    },
    {
      name: "img3",
      src: img12,
    },
    {
      name: "img4",
      src: img9,
    },
  ];
  return (
    <div>
      <div ref={aboutRef} className={styles.Revolutionize}>
        <div>
          <div className={`col-12 heading  ${styles.firstSection}`}>
            <div className={`${styles.Revolutionize_mainHeading}`}>
              REVOLUTIONIZING
            </div>
            <div className={styles.firstSection_right}>
              <div>
                {imgaes?.map((img) => (
                  <img src={img.src} alt={img.name} />
                ))}
              </div>
              <p>Modern Solutions,</p>
              <p>Timeless Smiles</p>
            </div>
          </div>
          <div className={styles.middleSection}>
            <div className={styles.middleSection_container}>
              <div className={styles.middleSection_container_first}>
                <p>ASSISTANCE</p>
                <img src={logo} alt="dental" />
              </div>
              <div className={` heading ${styles.Revolutionize_mainHeading}`}>
                DENTAL
              </div>
            </div>

            <div className={styles.middleSection_container}>
              <div className={styles.middleSection_container_last}>
                <div className={styles.shape1}>
                  <img src={img13} alt="" />
                </div>
                <div className={styles.shape}>
                  <img src={shape} alt="shape" />
                </div>
              </div>
              <div className={` heading ${styles.Revolutionize_mainHeading}`}>
                CARE
              </div>
            </div>
          </div>

          <div className={`col-12 heading  ${styles.lastSection}`}>
            <div className={`${styles.Revolutionize_mainHeading}`}>
              WITH TECHNOLOGY
            </div>
            <div className={styles.lastSection_right}>
              {images2.map((img) => (
                <div id={img.name} className={`${styles.imageContainer}`}>
                  <img src={img.src} alt={img.name} />
                </div>
              ))}
            </div>
          </div>
          <div className={`row ${styles.lastContainer}`}>
            <div className={`col-6 ${styles.friends}`}>
              <img src={img6} alt="friends" />
            </div>
            <div className="col-6 mt-7">
              <div className={`${styles.getStarted}`}>GET STARTED</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
