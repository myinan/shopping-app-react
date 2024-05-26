import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import shoesOnSand from "./assets/shoes-on-sand.jpg";
import { useContext } from "react";
import ProductDataContext from "../../contexts/ProductDataContext";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

const heading = "SPORTS SHOP";
const text = `Step up your game with our top-notch selection of sports footwear. Whether
you're hitting the court, the track, or the gym, we've got you
covered with a range of styles and technologies to suit your every need.`;
const imageAltText = "Sports Shoes";

export default function SportsPage() {
  const { sportsData } = useContext(ProductDataContext);
  const { productsData, error, loading } = sportsData;

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <main>
      <ProductsBanner
        heading={heading}
        text={text}
        imageSource={shoesOnSand}
        imageAltText={imageAltText}
      />
      <ProductsDisplaySection productsData={productsData} />
    </main>
  );
}
