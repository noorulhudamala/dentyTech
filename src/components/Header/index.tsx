import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import {menu} from '../../assets/images'
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="col-4 d-flex justify-content-start align-items-center">
        <button className="btn fontLight">Menu</button>
        <div className={styles.Header_menuIconContainer}><img src={menu} alt="menu"/></div>
      </div>
      <div className={`col-4 ${styles.Header_logoContainer}`}>
        <img src={logo} alt="logo" />
        <p className="fontLight">DENTYTECH</p>
        <div></div>
      </div>
      <div className="col-4 d-flex justify-content-center">
        <button className="btn fontLight">Log In</button>
        <button className={`btn fontLight ${styles.Header_SignUpBtn}`}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
