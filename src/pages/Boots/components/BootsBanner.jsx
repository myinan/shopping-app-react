import styles from "../Boots.module.css";
import FormalShoes from "../assets/formal-shoes.jpg";

export default function BootsBanner() {
  return (
    <div className={styles.BootsBannerContainer}>
      <div className={styles.bannerInfoContainer}>
        <h2>BOOTS SHOP</h2>
        <p>...</p>
      </div>
      <div className={styles.bannerImgWrapper}>
        <img src={FormalShoes} alt="Boots" className={styles.bannerImg} />
      </div>
    </div>
  );
}
