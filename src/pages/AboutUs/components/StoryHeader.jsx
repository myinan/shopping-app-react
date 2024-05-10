import styles from "../AboutUs.module.css";

export default function StoryHeader() {
  return (
    <div className={styles.storyHeader}>
      <h1 className={styles.storyHeaderTitle}>COMFORT MEETS STYLE</h1>
      <p className={styles.storyHeaderText}>
        Welcome to ShoeTrove, your destination for premium footwear. With a
        foundation rooted in expertise and a commitment to excellence, we pride
        ourselves on offering a curated collection of sneakers and boots that
        embody both style and substance. Our team brings years of industry
        experience to the table, ensuring that each product meets rigorous
        standards of quality and craftsmanship.
      </p>
      <p className={styles.storyHeaderText}>
        At ShoeTrove, we understand the importance of both fashion and function,
        and strive to provide footwear that not only complements your wardrobe
        but also delivers on comfort and durability. We invite you to explore
        our carefully curated selection and experience the difference that
        attention to detail makes.
      </p>
    </div>
  );
}
