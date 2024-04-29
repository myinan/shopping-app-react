import styles from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import shoeBlack from "../../assets/carousel-images/shoe-black.jpg";
import shoesTriple from "../../assets/carousel-images/shoes-triple.jpg";
import shoesWalking from "../../assets/carousel-images/shoes-walking.jpg";

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={shoeBlack} alt="Black shoe" className={styles.carouselImg} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={shoesTriple}
          alt="Three shoes, side by side"
          className={styles.carouselImg}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={shoesWalking}
          alt="People walking, focused on shoes"
          className={styles.carouselImg}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function HomePage() {
  return (
    <main>
      <HomeCarousel />
    </main>
  );
}

export default HomePage;

/* import { useEffect } from "react";
import useProductsData from "../hooks/useProductData";

function HomePage() {
  let elements = null;
  const productsData = useProductsData("adidas sneakers");

  useEffect(() => {
    console.log(productsData);
  });

  if (productsData) {
    elements = productsData.map((product, index) => {
      return (
        <img
          key={index}
          src={product.image}
          alt="image"
          height="180px"
          width="250px"
        />
      );
    });
  }

  return <main>{elements}</main>;
}
 */
