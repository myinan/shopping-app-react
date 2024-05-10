import styles from "../AboutUs.module.css";
import SneakersTop from "../assets/story-main-images/story-main-top-sneakers.jpg";

function SubSectionTop() {
  return (
    <div className={styles.storyMainSubSection}>
      <div className={styles.subSectionImgWrapper}>
        <img src={SneakersTop} alt="Sneakers" />
      </div>
      <div className={styles.subSectionInfoContainer}>
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
      </div>
    </div>
  );
}

function SubSectionMiddle() {
  return (
    <div className={styles.storyMainSubSection}>
      <div className={styles.subSectionImgWrapper}>
        <img src="" alt="Sub Section Img" />
      </div>
      <div className={styles.subSectionInfoContainer}>
        <h2 className={styles.subSectionInfoHeader}> Sub Section Header</h2>
        <p className={styles.subSectionInfoText}>Text 1</p>
        <p className={styles.subSectionInfoText}>Text 2</p>
        <p className={styles.subSectionInfoText}>Text 3</p>
      </div>
    </div>
  );
}

function SubSectionBottom() {
  return (
    <div className={styles.storyMainSubSection}>
      <div className={styles.subSectionImgWrapper}>
        <img src="" alt="Sub Section Img" />
      </div>
      <div className={styles.subSectionInfoContainer}>
        <h2 className={styles.subSectionInfoHeader}> Sub Section Header</h2>
        <p className={styles.subSectionInfoText}>Text 1</p>
        <p className={styles.subSectionInfoText}>Text 2</p>
        <p className={styles.subSectionInfoText}>Text 3</p>
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
