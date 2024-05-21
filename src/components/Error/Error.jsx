import styles from "./Error.module.css";
import catImg from "./assets/cat-error-image.jpeg";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className={styles.errorPageTopContainer}>
      <h3>404 - ERROR</h3>
      <h1>OOPS!</h1>
      <div className={styles.errorPageImgWrapper}>
        <img
          src={catImg}
          alt="cat with a shoe"
          className={styles.errorPageImg}
        />
      </div>
      <h6>THIS IS AWKWARD...</h6>
      <p>
        This page either doesn&apos;t exist or is under construction. Sorry
        about that, here&apos;s a picture of a cat instead.
      </p>
      <p>Try the links below!</p>
      <div className={styles.errorPageLinksContainer}>
        <Link to="/" className={styles.errorPageLink}>
          HOME
        </Link>
        <Link to="/collection" className={styles.errorPageLink}>
          COLLECTION
        </Link>
        <Link to="/sports" className={styles.errorPageLink}>
          SPORTS
        </Link>
        <Link to="/boots" className={styles.errorPageLink}>
          BOOTS
        </Link>
      </div>
    </main>
  );
}
