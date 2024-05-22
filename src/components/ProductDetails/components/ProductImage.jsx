import styles from "../ProductDetails.module.css";
import ImgNotAvailable from "../../../assets/image-not-available.png";
import ProductDetailContext from "../contexts/ProductDetailContext";
import { useContext } from "react";

export default function ProductImage() {
  const { curElement } = useContext(ProductDetailContext);

  return (
    <div className={styles.productImgContainer}>
      {curElement.image &&
      curElement.id !== "e87c0e9f-e3d3-4f3b-b0df-a165682bee4c" ? (
        <img
          src={curElement.image}
          alt={curElement.title}
          className={styles.productImg}
        />
      ) : (
        <img
          src={ImgNotAvailable}
          alt={curElement.title}
          className={styles.productImg}
        />
      )}
    </div>
  );
}
