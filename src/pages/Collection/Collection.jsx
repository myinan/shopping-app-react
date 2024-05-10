import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import shoesCollection from "./assets/shoes-collection.jpg";
import { useOutletContext } from "react-router-dom";

const heading = "COLLECTION";
const text = `...`;
const imageAltText = "Collection Footwear";

export default function CollectionPage() {
  const { bootsData, sportsData } = useOutletContext();

  const {
    productsData: sportsContextData,
    error: sportsError,
    loading: sportsLoading,
  } = sportsData;

  const {
    productsData: bootsContextData,
    error: bootsError,
    loading: bootsLoading,
  } = bootsData;

  const mergedData = [...sportsContextData, ...bootsContextData];

  if (bootsError || sportsError) return <p>A network error was encountered</p>;
  if (bootsLoading || sportsLoading) return <p>Loading...</p>;

  return (
    <main>
      <ProductsBanner
        heading={heading}
        text={text}
        imageSource={shoesCollection}
        imageAltText={imageAltText}
      />
      <ProductsDisplaySection productsData={mergedData} />
    </main>
  );
}
