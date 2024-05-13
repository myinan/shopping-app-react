/* import styles from "./ProductDetails.module.css"; */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductDataContext from "../../contexts/ProductDataContext";

export default function ProductDetailsPage() {
  let { productId } = useParams();
  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: dataB } = bootsData;
  const { productsData: dataS } = sportsData;
  const { productsData: dataF } = featuredData;

  const productsArray = [...dataB, ...dataS, ...dataF];
  const curElement = productsArray.find((product) => product.id === productId);

  return <h1>{curElement.brand}</h1>;
}
