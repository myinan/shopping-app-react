import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";

export default function NavBar() {
  return (
    <div className={styles.navLinksContainer}>
      <NavLink to="/collection">COLLECTION</NavLink>
      <NavLink to="/sports">SPORTS</NavLink>
      <NavLink to="/boots">BOOTS</NavLink>
      <NavLink to="/about">ABOUT US</NavLink>
    </div>
  );
}
