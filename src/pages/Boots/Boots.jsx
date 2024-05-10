import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import winterBoots from "./assets/winter-boots.jpg";
import { useContext } from "react";
import ProductDataContext from "../../contexts/ProductDataContext";
/* import CartContext from "../../contexts/CartContext"; */

const heading = "BOOTS SHOP";
const text = `Explore our curated range of boots designed to 
elevate your style and withstand the demands of your daily adventures. 
Discover timeless classics and on-trend designs crafted with premium 
materials and expert craftsmanship. Whether you're conquering city streets 
or wandering off the beaten path, find your perfect pair of boots here.`;
const imageAltText = "Winter Boots";

export default function BootsPage() {
  const { bootsData } = useContext(ProductDataContext);
  const { productsData, error, loading } = bootsData;

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

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
