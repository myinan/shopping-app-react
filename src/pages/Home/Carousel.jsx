import styles from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import shoeBlack from "../../assets/carousel-images/shoe-black.jpg";
import shoesTriple from "../../assets/carousel-images/shoes-triple.jpg";
import shoesWalking from "../../assets/carousel-images/shoes-walking.jpg";

export default function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={shoeBlack} alt="Black shoe" className={styles.carouselImg} />
        <Carousel.Caption>
          <h3>Versatile Styles</h3>
          <p>
            Explore our versatile collection of shoes that seamlessly transition
            from day to night, work to play. Find the perfect pair that suits
            every aspect of your lifestyle.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={shoesTriple}
          alt="Three shoes, side by side"
          className={styles.carouselImg}
        />
        <Carousel.Caption>
          <h3>Comfort Redefined</h3>
          <p>
            Experience comfort like never before with our range of shoes
            designed for all-day wear. From plush cushioning to ergonomic
            support, these shoes redefine what it means to walk on clouds.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={shoesWalking}
          alt="People walking, focused on shoes"
          className={styles.carouselImg}
        />
        <Carousel.Caption>
          <h3>Understated Elegance</h3>
          <p>
            Discover the allure of understated elegance with our curated
            selection of shoes. From minimalist designs to subtle detailing,
            these shoes exude sophistication with every step.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
