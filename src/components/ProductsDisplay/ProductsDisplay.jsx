import { useState } from "react";
import PropTypes from "prop-types";
/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import styles from "./ProductsDisplay.module.css";
import ImgNotAvailable from "./assets/image-not-available.png";
import Pagination from "./components/Pagination";

function ProductCell({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.pdCardImgWrapper}>
        {product.image &&
        product.id !== "e87c0e9f-e3d3-4f3b-b0df-a165682bee4c" ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <img src={ImgNotAvailable} alt={product.title} />
        )}
      </div>
      <div className={styles.pdCardInfoContainer}>
        <div className={styles.topInfo}>
          <p>{product.brand}</p>
          <p>{product.gender.toUpperCase()}</p>
        </div>
        <div className={styles.midInfo}>
          {product.title.length > 40 ? (
            <p>{product.title.substring(0, 40) + "..."}</p>
          ) : (
            <p>{product.title}</p>
          )}
        </div>
        <div className={styles.bottomInfo}>
          <p>{product.base_price}</p>
        </div>
      </div>
    </div>
  );
}

ProductCell.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    base_price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function ProductsGrid({ productsData }) {
  return productsData.map((product, index) => {
    return <ProductCell key={index} product={product} />;
  });
}

function SideBarNav() {
  return (
    <nav className={styles.sideBarNav}>
      <ul className={styles.sideBarNavLinks}>
        <li className={styles.sideBarNavLinkWrapper}>
          <NavLink to="/collection">All Products</NavLink>
        </li>
        <li className={styles.sideBarNavLinkWrapper}>
          <NavLink to="/sports">Sports Footwear</NavLink>
        </li>
        <li className={styles.sideBarNavLinkWrapper}>
          <NavLink to="/formal">Formal Footwear</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default function ProductsDisplaySection({ productsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  function paginate(pageNum) {
    setCurrentPage(pageNum);
  }

  return (
    <div className={styles.productsTopWrapper}>
      <div className={styles.sideBarAndProductsWrapper}>
        <SideBarNav />
        <div className={styles.productsGrid}>
          <ProductsGrid productsData={currentProducts} />
        </div>
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

ProductsDisplaySection.propTypes = {
  productsData: PropTypes.array.isRequired,
};
