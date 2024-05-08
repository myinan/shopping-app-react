import SportsBanner from "./components/SportsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import useProductsData from "../../hooks/useProductsData";

export default function SportsPage() {
  const { productsData, error, loading } = useProductsData("sports shoes");

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <SportsBanner />
      <ProductsDisplaySection productsData={productsData} />
    </main>
  );
}
