import Footer from "../../components/Footer";
import styles from "./Explore.module.scss";
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
  img1,
    img6,
  img3,
} from "../../assets/images";
import { useEffect } from "react";
const Explore = () => {
  const imgaes = [
    { name: "tech", src: tech },
    { name: "tooth", src: tooth },
    { name: "dna", src: dna },
  ];

  const row1 = [
    { name: "img13", src: img13 },
    { name: "img11", src: img11 },
    { name: "img2", src: img2 },
    { name: "img12", src: img12 },
  ];
  const row2 = [
    { name: "tech", src: img1 },
    { name: "tooth", src: img6 },
    { name: "dna", src: img3 },
  ];

    useEffect(() => {
        const sliderAnimation = () => {
            const slideUpEle = document.getElementById('slideUp');
            if (!(slideUpEle instanceof HTMLElement)) {
                return;
            }
            setTimeout(() => {
                slideUpEle.classList.remove(styles[`sliderUpward`]);
                slideUpEle.classList.add(styles[`moveUp`]);
            }, 500);

            const slideDownEle = document.getElementById('slideDown');
            if (!(slideDownEle instanceof HTMLElement)) {
                return;
            }
            setTimeout(()=>{
                slideDownEle.classList.remove(styles[`sliderDownward`]);
                slideDownEle.classList.add(styles[`moveDown`]);
            },  500)
        } 
        sliderAnimation();
    },[])
  return (
    <div className={`row`}>
      <div className="col-7">
        <div className="row">
          <div className={`col-10`}>
            <div className={`${styles.Explore}`}>
              <div>
                <div className="d-flex">
                  {imgaes?.map((img) => (
                    <img src={img.src} alt={img.name} />
                  ))}
                </div>
                <div className={`col-10 ${styles.Explore_mainHeading}`}>
                  <p>Explore Our Service, Make Your Smile Shine</p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <button className={`btn fontLight ${styles.orange}`}>
                    Get the App
                  </button>
                  <button className={`btn fontLight`}>Meet the Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="col-2"></div>
            <Footer />
      </div>
      <div className="col-5 d-flex">
        <div  className={`${styles.slider}`}>
          <div id="slideUp" className={`${styles.sliderUpward}`}>
            {row1.map((img) => (
              <div id={img.name} className={`${styles.imageContainer}`}>
                <img src={img.src} alt={img.name} />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.slider}`}>
          <div id="slideDown" className={`${styles.sliderDownward}`}>
            {row2.map((img) => (
              <div id={img.name} className={`${styles.imageContainer}`}>
                <img src={img.src} alt={img.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
