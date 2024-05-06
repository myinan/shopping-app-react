import styles from "../Sports.module.css";
import ShoesOnSand from "../assets/shoes-on-sand.jpg";

export default function SportsBanner() {
  return (
    <div className={styles.sportsBannerContainer}>
      <div className={styles.bannerInfoContainer}>
        <h2>SPORTS SHOP</h2>
        <p>
          Step up your game with our top-notch selection of sports footwear.
          Whether you&apos;re hitting the court, the track, or the gym,
          we&apos;ve got you covered with a range of styles and technologies to
          suit every athlete&apos;s needs. From lightweight running shoes
          engineered for speed to durable basketball sneakers built for agility
          and support, our collection offers the perfect blend of style,
          functionality, and durability.
        </p>
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
