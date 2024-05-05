import HomeCarousel from "./components/Carousel";
import ShopNow from "./components/ShopNow";
import LatestPosts from "./components/LatestPosts";
import FeaturedProducts from "./components/FeaturedProducts";

function HomePage() {
  return (
    <main>
      <HomeCarousel />
      <ShopNow />
      <LatestPosts />
      <FeaturedProducts />
    </main>
  );
}

export default HomePage;
