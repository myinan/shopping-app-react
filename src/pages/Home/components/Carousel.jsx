import styles from "../Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import boots from "../assets/carousel-images/boots.jpg";
import nikes from "../assets/carousel-images/nikes.jpg";
import nikes2 from "../assets/carousel-images/nikes2.jpg";

export default function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={nikes} alt="Nike shoes" className={styles.carouselImg} />
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
        <img src={nikes2} alt="Nike shoes" className={styles.carouselImg} />
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
        <img src={boots} alt="Boots" className={styles.carouselImg} />
        <Carousel.Caption>
          <h3>Rugged Durability</h3>
          <p>
            Embrace the strength and resilience of our sturdy boots collection.
            Built to withstand the toughest conditions, these boots offer
            unwavering support and durability. Perfect for any adventure, they
            combine rugged style with practical functionality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
