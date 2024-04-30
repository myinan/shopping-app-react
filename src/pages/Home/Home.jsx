import HomeCarousel from "./Carousel";
import ShopNow from "./ShopNow";
import LatestPosts from "./LatestPosts";
import FeaturedProducts from "./FeaturedProducts";

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
