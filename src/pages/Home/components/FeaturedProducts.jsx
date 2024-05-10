import styles from "../Home.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductDataContext from "../../../contexts/ProductDataContext";
/* import CartContext from "../../../contexts/CartContext"; */

import "../slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedProduct({ product }) {
  return (
    <Link to="/test">
      <div className={styles.featuredItem}>
        <img src={product.image} alt={product.title} />
        <div className={styles.featuredItemInfoContainer}>
          <p>{product.brand}</p>
          <div className={styles.titleAndPriceInfo}>
            <p>{product.title}</p>
            <p>{product.base_price}$</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

FeaturedProduct.propTypes = {
  product: PropTypes.shape({
    base_price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function FeaturedsCarousel({ products }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={styles.featuredContainer}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {products.map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

FeaturedsCarousel.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function FeaturedProducts() {
  const { featuredData } = useContext(ProductDataContext);
  const { productsData, error, loading } = featuredData;

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.featuredProductsContainer}>
      <h3>New Arrivals</h3>
      <FeaturedsCarousel products={productsData} />
    </div>
  );
}
