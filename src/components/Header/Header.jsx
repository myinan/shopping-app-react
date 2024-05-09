import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <NavLink to="/">
        <h1 className={styles.mainHeading}>SHOE TROVE</h1>
        <h3 className={styles.subHeading}>FOOTWEAR</h3>
      </NavLink>
    </div>
  );
}

function NavBar() {
  function isActive({ isActive }) {
    return isActive ? styles.activeNavLink : "";
  }

  return (
    <div className={styles.navLinksContainer}>
      <NavLink to="/collection" className={isActive}>
        COLLECTION
      </NavLink>
      <NavLink to="/sports" className={isActive}>
        SPORTS
      </NavLink>
      <NavLink to="/boots" className={isActive}>
        BOOTS
      </NavLink>
      <NavLink to="/about" className={isActive}>
        ABOUT US
      </NavLink>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
}
