import { useContext, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductDataContext from "../../../contexts/ProductDataContext";

export default function useVariantSelection() {
  let { productId } = useParams();
  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: dataB } = bootsData;
  const { productsData: dataS } = sportsData;
  const { productsData: dataF } = featuredData;

  const productsArray = useMemo(
    () => [...dataB, ...dataS, ...dataF],
    [dataB, dataS, dataF]
  );

  const curElement = useMemo(
    () => productsArray.find((product) => product.id === productId),
    [productsArray, productId]
  );

  // This array is memoized so the useEffect doesn't mistake it as a new array
  const sortedVariantsArr = useMemo(
    () => curElement.variants.slice().sort((a, b) => a.size - b.size),
    [curElement]
  );

  const [selectedVariant, setSelectedVariant] = useState(sortedVariantsArr[0]);

  // The "effectDependency" dependency is required for correctly rendering the product price, when the
  // ProductDetails page is rendered through the offCanvas. This dependency makes sure the selectedVariant
  // is updated on parameter change, even if the ProductDetails component is still mounted.
  const effectDependency = JSON.stringify([sortedVariantsArr, productId]);
  useEffect(() => {
    setSelectedVariant(sortedVariantsArr[0]);
  }, [sortedVariantsArr, effectDependency]);

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
