import styles from "./Sports.module.css";
import ShoesOnSand from "./assets/shoes-on-sand.jpg";

function SportsBanner() {
  return (
    <div className={styles.sportsBannerContainer}>
      <div className={styles.bannerInfoContainer}>
        <h2>Sports Shop</h2>
        <p>Sports Shop Info here.</p>
      </div>
      <div className={styles.bannerImgWrapper}>
        <img
          src={ShoesOnSand}
          alt="Sports shoes"
          className={styles.bannerImg}
        />
      </div>
    </div>
  );
}

export default function SportsPage() {
  return (
    <main>
      <SportsBanner />
    </main>
  );
}
