import useProductsData from "./useProductsData";

export default function useOutletContextData() {
  //  Fetch data sequentially instead of with Promise.all, so the loading state can be returned
  const bootsData = useProductsData("Waterproof Boots");
  const sportsData = useProductsData("sports shoes");
  const featuredData = useProductsData("shoes popular");

  return {
    bootsData,
    sportsData,
    featuredData,
  };
}
