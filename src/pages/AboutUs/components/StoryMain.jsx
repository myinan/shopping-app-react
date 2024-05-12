import styles from "../AboutUs.module.css";
import { Link } from "react-router-dom";
import sneakersTop from "../assets/story-main-images/story-main-top-sneakers.jpg";
import sneakersMiddle from "../assets/story-main-images/story-main-middle-sneakers.jpg";
import bootsBottom from "../assets/story-main-images/story-main-bottom-boots.jpg";

function SubSectionTop() {
  return (
    <div className={styles.storyMainSubSection}>
      <div
        className={`${styles.subSectionImgWrapper} ${styles.ImgWrapperLeft}`}
      >
        <img src={sneakersTop} alt="Sneakers" />
      </div>
      <div
        className={`${styles.subSectionInfoContainer} ${styles.InfoContainerRight}`}
      >
        <h2 className={styles.subSectionInfoHeader}>About Us</h2>
        <p className={styles.subSectionInfoText}>
          ShoeTrove was founded with a clear mission - to offer a diverse
          selection of top-tier footwear from leading brands like Nike, Adidas,
          Balenciaga or Timberland, empowering individuals to express their
          style with confidence.
        </p>
        <p className={styles.subSectionInfoText}>
          Our journey began with a team passionate about providing access to the
          latest trends and iconic designs, curating a collection that
          represents the pinnacle of quality and innovation in the footwear
          industry and we we continue to uphold this commitment to this day.
        </p>
        <p className={styles.subSectionInfoText}>
          With a keen eye for sought-after releases and classic silhouettes
          alike, ShoeTrove remains dedicated to redefining the boundaries of
          footwear fashion.
        </p>
        <Link to="/collection" className={styles.subSectionLink}>
          Browse Collection
        </Link>
      </div>
    </div>
  );
}

function SubSectionMiddle() {
  return (
    <div className={styles.storyMainSubSection}>
      <div
        className={`${styles.subSectionInfoContainer} ${styles.InfoContainerLeft}`}
      >
        <h2 className={styles.subSectionInfoHeader}>Stylish Sneakers</h2>
        <p className={styles.subSectionInfoText}>
          At ShoeTrove, we champion the belief that everyone deserves access to
          fashionable and high-quality sneakers. Our dedication to excellence
          drives us to curate a meticulously crafted selection of sneakers that
          embody the perfect blend of style and functionality.
        </p>
        <p className={styles.subSectionInfoText}>
          From classic silhouettes to the latest releases, our sneaker
          collection caters to every taste and preference, ensuring that our
          customers can effortlessly find the perfect pair to elevate their
          style.
        </p>
        <p className={styles.subSectionInfoText}>
          Our unwavering commitment to offering stylish sneakers remains at the
          forefront of our mission. We take immense pride in providing footwear
          that not only reflects the latest trends but also meets the highest
          standards of quality and craftsmanship.
        </p>
        <Link to="/sports" className={styles.subSectionLink}>
          Browse Sneakers
        </Link>
      </div>
      <div
        className={`${styles.subSectionImgWrapper} ${styles.ImgWrapperRight}`}
      >
        <img src={sneakersMiddle} alt="Sneakers" />
      </div>
    </div>
  );
}

function SubSectionBottom() {
  return (
    <div className={styles.storyMainSubSection}>
      <div
        className={`${styles.subSectionImgWrapper} ${styles.ImgWrapperLeft}`}
      >
        <img src={bootsBottom} alt="Boots" />
      </div>
      <div
        className={`${styles.subSectionInfoContainer} ${styles.InfoContainerRight}`}
      >
        <h2 className={styles.subSectionInfoHeader}>Quality Boots</h2>
        <p className={styles.subSectionInfoText}>
          Here, we prioritize the fusion of style and durability in every boot
          we offer. Our commitment to excellence drives us to curate a
          discerningly crafted selection of boots that embody superior quality
          and timeless elegance.
        </p>
        <p className={styles.subSectionInfoText}>
          From sophisticated urban designs to rugged outdoor essentials, our
          boot collection caters to diverse tastes and preferences, ensuring our
          customers can confidently find the perfect pair for any occasion.
        </p>
        <p className={styles.subSectionInfoText}>
          Our unwavering dedication to providing quality boots underscores our
          mission. We take pride in delivering footwear that not only aligns
          with contemporary trends but also upholds the highest standards of
          craftsmanship and longevity.
        </p>
        <Link to="/boots" className={styles.subSectionLink}>
          Browse Boots
        </Link>
      </div>
    </div>
  );
}

export default function StoryMain() {
  return (
    <div className={styles.storyMain}>
      <SubSectionTop />
      <SubSectionMiddle />
      <SubSectionBottom />
    </div>
  );
}
