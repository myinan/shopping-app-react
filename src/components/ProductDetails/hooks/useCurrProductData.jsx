import { useContext, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductDataContext from "../../../contexts/ProductDataContext";

export default function useCurrProductData() {
  // Get produtId parameter to reach current product data
  let { productId } = useParams();

  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: dataB, error: errB, loading: loadingB } = bootsData;
  const { productsData: dataS, error: errS, loading: loadingS } = sportsData;
  const { productsData: dataF, error: errF, loading: loadingF } = featuredData;

  let error = false;
  let loading = true;
  if (errB || errS || errF) error = true;
  if (!loadingB && !loadingS && !loadingF) loading = false;

  const productsArray = useMemo(
    () => [...dataB, ...dataS, ...dataF],
    [dataB, dataS, dataF]
  );

  const curElement = useMemo(() => {
    if (productsArray.length !== 0) {
      return productsArray.find((product) => product.id === productId);
    }
  }, [productsArray, productId]);

  // This array is memoized so the useEffect doesn't mistake it as a new array
  const sortedVariantsArr = useMemo(() => {
    if (curElement) {
      return curElement.variants.slice().sort((a, b) => a.size - b.size);
    }
    return [{}];
  }, [curElement]);

  const [selectedVariant, setSelectedVariant] = useState(sortedVariantsArr[0]);

  // If the ProductDetails page is reached through the offCanvas, this useEffect is needed to render
  // the correct data
  useEffect(() => {
    setSelectedVariant(sortedVariantsArr[0]);
  }, [sortedVariantsArr, productId]);

  // Event handler to update the selected variant object
  const handleVariantSelect = (event) => {
    const selectedVariantObject = JSON.parse(event.target.value);
    setSelectedVariant(selectedVariantObject);
  };

  return {
    error,
    loading,
    curElement, // The element in productsArray which it's id matches url "productId" parameter
    sortedVariantsArr, // Avaliable price/size variants of the current shoe item, sorted
    selectedVariant, // Selected price/size variant, initially the first item in sortedVariantsArr
    handleVariantSelect, // handler function to select a different price/size variant
  };
}
