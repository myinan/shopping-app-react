import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import useProductsData from "../../hooks/useProductData";

export default function FeaturedProducts() {
  return (
    <div className={styles.featuredContainer}>
      <h3>New Arrivals</h3>
      <div></div>
    </div>
  );
}

/* export default function MostPopularProducts() {
  let elements = null;
  const productsData = useProductsData("shoes popular");

  useEffect(() => {
    console.log(productsData);
  });

  if (productsData) {
    elements = productsData.map((product, index) => {
      return (
        <img
          key={index}
          src={product.image}
          alt="image"
          height="180px"
          width="250px"
        />
      );
    });
  }

  return <div>{elements.slice(0, 7)}</div>;
} */
