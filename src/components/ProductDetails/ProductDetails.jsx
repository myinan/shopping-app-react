import styles from "./ProductDetails.module.css";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DetailContextProvider from "./contexts/DetailContextProvider";

export default function ProductDetailsPage() {
  return (
    <main className={styles.productPage}>
      <DetailContextProvider>
        <ProductImage />
        <ProductInfo />
      </DetailContextProvider>
    </main>
  );
}
