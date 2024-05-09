import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import useProductsData from "../../hooks/useProductsData";
import winterBoots from "./assets/winter-boots.jpg";

const heading = "BOOTS SHOP";
const text = `Explore our curated range of boots designed to 
elevate your style and withstand the demands of your daily adventures. 
Discover timeless classics and on-trend designs crafted with premium 
materials and expert craftsmanship. Whether you're conquering city streets 
or wandering off the beaten path, find your perfect pair of boots here.`;
const imageAltText = "Winter Boots";

export default function BootsPage() {
  const { productsData, error, loading } = useProductsData("Waterproof Boots");

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
