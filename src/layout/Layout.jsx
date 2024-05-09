import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useProductsData from "../hooks/useProductsData";

function useContextData() {
  const {
    productsData: bootsData,
    error: bootsError,
    loading: bootsLoading,
  } = useProductsData("Waterproof Boots");

  const {
    productsData: sportsData,
    error: sportsError,
    loading: sportsLoading,
  } = useProductsData("sports shoes");

  const {
    productsData: featuredData,
    error: featuredError,
    loading: featuredLoading,
  } = useProductsData("shoes popular");

  return {
    bootsData,
    bootsError,
    bootsLoading,
    sportsData,
    sportsError,
    sportsLoading,
    featuredData,
    featuredError,
    featuredLoading,
  };
}

export default function Layout() {
  const contextObj = useContextData();

  return (
    <>
      <Header />
      <Outlet context={contextObj} />
      <Footer />
    </>
  );
}
