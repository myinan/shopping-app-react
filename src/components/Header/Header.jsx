import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import SearchOffCanvas from "./components/SearchOffCanvas/SearchOffCanvas";
import CartButton from "./components/CartButton";
import NavBar from "./components/Navbar";

function LogoAndButtons() {
  return (
    <div className={styles.logoButtonsContainer}>
      <div className={styles.logoContainer}>
        <NavLink to="/">
          <h1 className={styles.mainHeading}>SHOE TROVE</h1>
          <h3 className={styles.subHeading}>FOOTWEAR</h3>
        </NavLink>
      </div>

      <div className={styles.buttonsContainer}>
        <SearchOffCanvas />
        <CartButton />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <LogoAndButtons />
      <NavBar />
    </header>
  );
}
