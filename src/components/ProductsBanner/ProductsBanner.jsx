import styles from "./ProductsBanner.module.css";
import PropTypes from "prop-types";

export default function ProductsBanner({
  heading,
  text,
  imageSource,
  imageAltText,
}) {
  return (
    <div className={styles.ProductsBannerContainer}>
      <div className={styles.bannerInfoContainer}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.bannerImgWrapper}>
        <img
          src={imageSource}
          alt={imageAltText}
          className={styles.bannerImg}
        />
      </div>
    </div>
  );
}

ProductsBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
};
