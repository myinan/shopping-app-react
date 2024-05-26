import styles from "./ProductDetails.module.css";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DetailContextProvider from "./contexts/DetailContextProvider";
import { useContext } from "react";
import ProductDetailContext from "./contexts/ProductDetailContext";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

function ProductDetailsContent() {
  const { error, loading } = useContext(ProductDetailContext);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProductImage />
      <ProductInfo />
    </>
  );
}

export default function ProductDetailsPage() {
  return (
    <main className={styles.productPage}>
      <DetailContextProvider>
        <ProductDetailsContent />
      </DetailContextProvider>
    </main>
  );
}
