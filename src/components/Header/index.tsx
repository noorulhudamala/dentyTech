import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="col-4">
        <button className="btn fontLight">Menu</button>
      </div>
      <div className={`col-4 ${styles.Header_logoContainer}`}>
        <img src={logo} alt="logo" />
        <p className="fontLight">DENTYTECH</p>
        <div></div>
      </div>
      <div className="col-4">
        <button className="btn fontLight">Log In</button>
        <button className={`btn fontLight ${styles.Header_SignUpBtn}`}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
