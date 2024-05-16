import styles from "./ProductInfo.module.css";
import ProductDetailContext from "../../contexts/ProductDetailContext";
import { useContext } from "react";

function ProductInfoTop() {
  const { curElement, selectedVariant } = useContext(ProductDetailContext);

  return (
    <>
      <div className={styles.productDetailBrandAndGender}>
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
    </>
  );
}

function ProductInfoMiddle() {
  const { curElement, sortedVariantsArr, handleVariantSelect } =
    useContext(ProductDetailContext);

  return (
    <div className={styles.productDetailDescription}>
      <p>
        {curElement.description
          ? (() => {
              let firstSentence = curElement.description
                .split(/(?<=\.|\?|!)\s(?=[A-Z][a-z])/)
                .find(
                  (sentence) => sentence.length >= 50 && sentence.length <= 165
                );
              return firstSentence
                ? firstSentence
                : curElement.description.slice(0, 165) + "...";
            })()
          : ""}
      </p>

      <div className={styles.selectContainer}>
        <div className={styles.sizeAndQuantityContainer}>
          <div className={styles.sizeSelectMenu}>
            <label htmlFor="shoe-size">Size:</label>
            <select
              name="sizes"
              id="shoe-size"
              onChange={(e) => handleVariantSelect(e)}
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
            <input type="number" max={14} min={1} defaultValue={1}></input>
          </div>
        </div>

        <p>*Price may vary depending on shoe size.</p>
      </div>
    </div>
  );
}

function ProductInfoBottom() {
  return (
    <div className={styles.productButtonsContainer}>
      <button type="button">ADD TO CART</button>
    </div>
  );
}

export default function ProductInfo() {
  return (
    <div className={styles.productDetailsContainer}>
      <ProductInfoTop />
      <ProductInfoMiddle />
      <ProductInfoBottom />
    </div>
  );
}
