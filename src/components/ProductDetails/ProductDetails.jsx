import styles from "./ProductDetails.module.css";
import { useContext, useState, useEffect } from "react";
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
  let sortedVariantsArr = curElement.variants
    .slice()
    .sort((a, b) => a.size - b.size);

  const [selectedVariant, setSelectedVariant] = useState(sortedVariantsArr[0]);

  // Event handler to update the selected variant object
  const handleVariantSelect = (event) => {
    const selectedVariantObject = JSON.parse(event.target.value);
    setSelectedVariant(selectedVariantObject);
  };

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
    </main>
  );
}
