import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import ProductsDisplaySection from "../../components/ProductsDisplay/ProductsDisplay";
import shoesOnSand from "./assets/shoes-on-sand.jpg";
import { useOutletContext } from "react-router-dom";

const heading = "SPORTS SHOP";
const text = `Step up your game with our top-notch selection of sports footwear. Whether
you&apos;re hitting the court, the track, or the gym, we&apos;ve got you
covered with a range of styles and technologies to suit every
athlete&apos;s needs. From lightweight running shoes engineered for speed
to durable basketball sneakers built for agility and support, our
collection offers the perfect blend of style, functionality, and
durability.`;
const imageAltText = "Sports Shoes";

export default function SportsPage() {
  const { sportsData } = useOutletContext();
  const { productsData, error, loading } = sportsData;

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

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
