import styles from "../ProductDetails.module.css";
import ProductDetailContext from "../contexts/ProductDetailContext";
import { useContext } from "react";

export default function ProductInfo() {
  const {
    curElement,
    sortedVariantsArr,
    selectedVariant,
    handleVariantSelect,
  } = useContext(ProductDetailContext);

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productDetailTop}>
        <h4 className={styles.productDetailBrand}>
          {curElement.title.split(" ").slice(0, 1).join(" ")}
        </h4>
        <p className={styles.productDetailGender}>
          {curElement.gender.toUpperCase()}
        </p>
      </div>
      <h2 className={styles.productDetailTitle}>
        {curElement.title.split(" ").slice(1, 4).join(" ")}
      </h2>
      <p className={styles.productDetailPrice}>{selectedVariant.price}</p>
      <div className={styles.productDetailDescription}>
        <p>Product Details here...</p>

        <div className={styles.selectContainer}>
          <div className={styles.sizeAndQuantityContainer}>
            <div className={styles.labelAndSelectMenu}>
              <label htmlFor="shoe-size">Size:</label>
              <select
                name="sizes"
                id="shoe-size"
                onChange={handleVariantSelect}
              >
                {sortedVariantsArr.map((variant, index) => {
                  return (
                    <option key={index} value={JSON.stringify(variant)}>
                      {variant.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.quantityInput}>
              <label>Quantity:</label>
              <input type="number" max={14} min={1}></input>
            </div>
          </div>

          <p>*Price may vary depending on shoe size.</p>
        </div>
      </div>

      <div className={styles.productButtonsContainer}>
        <button type="button">ADD TO CART</button>
      </div>
    </div>
  );
}
