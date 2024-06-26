import styles from "../Home.module.css";
import { Link } from "react-router-dom";
import footwearVertical from "../assets/shop-now-images/footwear-vertical.jpg";
import shoesPair from "../assets/shop-now-images/shoes-pair.jpg";

export default function ShopNow() {
  return (
    <div className={styles.shopNowSection}>
      <div className={styles.leftSide}>
        <h2>Shoe Trove</h2>
        <p>
          Welcome to Shoe Trove, your destination for premium footwear from the
          world&apos;s most renowned brands like Puma, Adidas, and more. We
          curate a diverse selection of footwear products, ensuring that every
          step you take reflects your unique style and personality. Whether
          you&apos;re looking for iconic classics or the latest trendsetters,
          our collection has something for everyone.
        </p>
        <Link to="/boots">BROWSE BOOTS</Link>
        <div className={styles.shopNowImgWrapper}>
          <img src={footwearVertical} className={styles.shopNowImg}></img>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.shopNowImgWrapper}>
          <img src={shoesPair} className={styles.shopNowImg}></img>
        </div>

        <Link to="/collection">SEE THE COLLECTION</Link>
      </div>
    </div>
  );
}
