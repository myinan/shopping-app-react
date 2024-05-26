import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import shoesCollection from "./assets/shoes-collection.jpg";
import { useContext } from "react";
import ProductDataContext from "../../contexts/ProductDataContext";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

const heading = "COLLECTION";
const text = `Discover the best of both worlds with our exclusive COLLECTION, 
featuring an extensive range of sports footwear and boots. 
Whether you're a sneakerhead seeking for the best sneakers out there, 
or a style-savvy explorer in search of high-quality boots, our curated selection caters to all your needs. `;
const imageAltText = "Collection Footwear";

export default function CollectionPage() {
  const { bootsData, sportsData } = useContext(ProductDataContext);

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

  if (bootsError || sportsError) return <Error />;
  if (bootsLoading || sportsLoading) return <Loading />;

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
