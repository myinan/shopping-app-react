import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import footwearVertical from "../../assets/footwear-vertical.jpg";
import shoesPair from "../../assets/shoes-pair.jpg";

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
        <Link>Browse Shoe Trove</Link>
        <img src={footwearVertical} className={styles.shopNowLeftImg}></img>
      </div>

      <div className={styles.rightSide}>
        <img src={shoesPair} className={styles.shopNowRightImg}></img>
        <Link>See all products</Link>
      </div>
    </div>
  );
}
