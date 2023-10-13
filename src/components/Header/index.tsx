import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="col-4">
        <button className="btn">Menu</button>
      </div>
      <div className={`col-4 ${styles.Header_logoContainer}`}>
        <img src={logo} alt="logo" />
        <p>DENTYTECH</p>
        <div></div>
      </div>
      <div className="col-4">
        <button className="btn">Log In</button>
        <button className={`btn ${styles.Header_SignUpBtn}`}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
