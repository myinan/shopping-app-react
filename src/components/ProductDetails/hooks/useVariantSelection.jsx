import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDataContext from "../../../contexts/ProductDataContext";

export default function useVariantSelection() {
  let { productId } = useParams();
  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: dataB } = bootsData;
  const { productsData: dataS } = sportsData;
  const { productsData: dataF } = featuredData;

  const productsArray = [...dataB, ...dataS, ...dataF];
  const curElement = productsArray.find((product) => product.id === productId);
  const sortedVariantsArr = curElement.variants
    .slice()
    .sort((a, b) => a.size - b.size);

  const [selectedVariant, setSelectedVariant] = useState(sortedVariantsArr[0]);

  // Event handler to update the selected variant object
  const handleVariantSelect = (event) => {
    const selectedVariantObject = JSON.parse(event.target.value);
    setSelectedVariant(selectedVariantObject);
  };

  return {
    curElement,
    sortedVariantsArr,
    selectedVariant,
    handleVariantSelect,
  };
}
