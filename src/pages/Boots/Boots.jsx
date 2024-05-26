import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import winterBoots from "./assets/winter-boots.jpg";
import { useContext } from "react";
import ProductDataContext from "../../contexts/ProductDataContext";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

const heading = "BOOTS SHOP";
const text = `Explore our curated range of boots designed to 
elevate your style and withstand the demands of your daily adventures. 
Whether you're conquering city streets or wandering off the beaten path, 
find your perfect pair of boots here.`;
const imageAltText = "Winter Boots";

export default function BootsPage() {
  const { bootsData } = useContext(ProductDataContext);
  const { productsData, error, loading } = bootsData;

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <main>
      <ProductsBanner
        heading={heading}
        text={text}
        imageSource={winterBoots}
        imageAltText={imageAltText}
      />
      <ProductsDisplaySection productsData={productsData} />
    </main>
  );
}
