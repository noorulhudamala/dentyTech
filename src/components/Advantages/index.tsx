import Footer from "../Footer";
import { img2, img12, img9, img11, arrowDown } from "../../assets/images";
import styles from "./Advantages.module.scss";
import { RefObject, useEffect } from "react";

type AdvantagesProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const Advantages = ({ aboutRef }: AdvantagesProps) => {
  const images = [
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
  useEffect(() => {
    let timer1: NodeJS.Timer, timer2: NodeJS.Timer, timer3: NodeJS.Timer;
    const rotateImage = () => {
      let images = Array.from(document.querySelectorAll(".advantages"));
      images.reverse();
      let timer = 3000;
      if (images.length) {
        images.forEach((element, idx) => {
          if (!(element instanceof HTMLElement)) {
            return;
          }
          element.classList.remove(styles[`slide-down`]);
          element.classList.add(styles[`slide-mid`]);
          timer1 = setTimeout(() => {
            element.classList.add(styles[`rotate${idx + 1}0`]);
            element.style.transform = `rotate(-${idx + 1}0deg)`;
          }, 3000);
          timer2 = setTimeout(() => {
            element.classList.add(styles["slideUp"]);
          }, timer + 2000);

          timer3 = setTimeout(() => {
            element.classList.add(styles["slide-down"]);
            element.classList.remove(
              styles[`slide-mid`],
              styles[`rotate${idx + 1}0`],
              styles["slideUp"]
            );
          }, timer + 4000);
          timer += 1500;
        });
      }
    };
    const timerInterval = setInterval(() => {
      rotateImage();
    }, 14000);
    rotateImage();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
      <div>
        <div className={styles.Advantages}>
          <div className={`col-12 heading ${styles.Advantages_mainHeading}`}>
            OUR ADVANTAGES
          </div>
          <div className={""}>
            {images.map((img) => (
              <div
                id={img.name}
                className={`advantages ${styles.imageContainer} ${styles.translateBottom}`}
              >
                <img src={img.src} alt={img.name} />
              </div>
            ))}
          </div>
          <div
            className={styles.arrowDow}>
            <img src={arrowDown} alt="arrow-down" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Advantages;
