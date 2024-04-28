import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <h1 className={styles.mainHeading}>SHOE TROVE</h1>
      <h3 className={styles.subHeading}>FOOTWEAR</h3>
    </div>
  );
}

function NavBar() {
  function isActive({ isActive }) {
    return isActive ? styles.activeNavLink : "";
  }

  return (
    <div className={styles.navLinksContainer}>
      <NavLink className={isActive}>Navlink 1</NavLink>
      <NavLink className={isActive}>Navlink 2</NavLink>
      <NavLink className={isActive}>Navlink 3</NavLink>
      <NavLink className={isActive}>Navlink 4</NavLink>
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
