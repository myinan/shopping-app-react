import styles from "./ProductInfo.module.css";
import ProductDetailContext from "../../contexts/ProductDetailContext";
import { useState, useContext } from "react";
import useCart from "./useCart";

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
  const {
    curElement,
    sortedVariantsArr,
    handleVariantSelect,
    selectedQuantity,
    setSelectedQuantity,
  } = useContext(ProductDetailContext);

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
            <input
              type="number"
              max={14}
              min={1}
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            ></input>
          </div>
        </div>

        <p className={styles.productInfoWarning}>
          *Price may vary depending on shoe size.
        </p>
      </div>
    </div>
  );
}

function ProductInfoBottom() {
  const updateCart = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);

  return (
    <div className={styles.productButtonsContainer}>
      <button
        type="button"
        onClick={() => {
          const { isProductInCart, isQuantityAllowed } = updateCart();
          setIsAdded(isProductInCart);
          setIsAllowed(isQuantityAllowed);
        }}
      >
        ADD TO CART
      </button>
      {isAdded ? (
        <p className={styles.productInfoWarning}>
          *Product is already added to your cart.
        </p>
      ) : (
        ""
      )}
      {!isAdded && !isAllowed ? (
        <p className={styles.productInfoWarning}>
          Please contact our customer service to purchase more than 14 pairs.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default function ProductInfo() {
  const { error, loading } = useContext(ProductDetailContext);

  if (error) return <p>An error has occurred.</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.productDetailsContainer}>
      <ProductInfoTop />
      <ProductInfoMiddle />
      <ProductInfoBottom />
    </div>
  );
}
