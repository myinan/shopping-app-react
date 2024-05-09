import BootsBanner from "./components/BootsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import useProductsData from "../../hooks/useProductsData";
import { useEffect } from "react";

export default function BootsPage() {
  const { productsData, error, loading } = useProductsData("Waterproof Boots");

  useEffect(() => {
    console.log(productsData);
  });

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <BootsBanner />
      <ProductsDisplaySection productsData={productsData} />
    </main>
  );
}
