import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useProductsData from "../../../hooks/useProductsData";
import styles from "../Sports.module.css";

function ProductCell({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.pdCardImgWrapper}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.pdCardInfoContainer}>
        <p>{product.brand}</p>
      </div>
    </div>
  );
}

ProductCell.propTypes = {
  product: PropTypes.shape({
    base_price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function ProductsDisplay({ productsData }) {
  return productsData.map((product, index) => {
    return <ProductCell key={index} product={product} />;
  });
}

export default function SportsShoesSection() {
  const { productsData, error, loading } = useProductsData("sports shoes");

  useEffect(() => {
    console.log(productsData);
  });

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.productsGridContainer}>
      <div className={styles.productsGrid}>
        <ProductsDisplay productsData={productsData} />
      </div>
    </div>
  );
}
