import styles from "./ProductDetails.module.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDataContext from "../../contexts/ProductDataContext";
import ImgNotAvailable from "./assets/image-not-available.png";

export default function ProductDetailsPage() {
  let { productId } = useParams();
  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: dataB } = bootsData;
  const { productsData: dataS } = sportsData;
  const { productsData: dataF } = featuredData;

  const productsArray = [...dataB, ...dataS, ...dataF];
  const curElement = productsArray.find((product) => product.id === productId);

  useEffect(() => {
    console.log(curElement);
  });

  return (
    <main className={styles.productPage}>
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
      <div className={styles.productDetailsContainer}>
        <h2 className={styles.productDetailTitle}>
          {curElement.title.split(" ").slice(0, 4).join(" ")}
        </h2>
        <p className={styles.productDetailPrice}>{curElement.base_price}</p>
        <p className={styles.productDetailDescription}>
          {curElement.description}
        </p>
      </div>
    </main>
  );
}
