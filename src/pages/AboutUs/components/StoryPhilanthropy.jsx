import styles from "../AboutUs.module.css";
import philanthropyImg from "../assets/philanthropy-image.jpg";
import { Link } from "react-router-dom";

export default function StoryPhilanthropy() {
  return (
    <div className={styles.storyPhilantrophy}>
      <div className={styles.philantrophyInfoContainer}>
        <h2>Philanthropy</h2>
        <p>
          At ShoeTrove, we believe in walking with purpose. That&apos;s why
          we&apos;re committed to ensuring that every step counts not just for
          our customers, but for people in need. Through our philanthropic
          initiatives, we strive to provide underprivileged people with the
          footwear they need to thrive.
        </p>
        <p>
          With every purchase made on our website, a portion of the proceeds
          goes towards providing shoes for those who need them most. Join us in
          making a difference, one step at a time.
        </p>
        <Link to="/learnmore" className={styles.philanthropyLink}>
          Learn More
        </Link>
      </div>
      <div className={styles.philantrophyImgWrapper}>
        <img
          src={philanthropyImg}
          alt="Shoewear Philanthrophy"
          className={styles.philantrophyImg}
        />
      </div>
    </div>
  );
}
