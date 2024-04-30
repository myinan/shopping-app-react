import styles from "./Home.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import shoesSports from "../../assets/latest-posts-images/shoes-sports.jpg";
import sneakers from "../../assets/latest-posts-images/sneakers.jpg";
import shoesMany from "../../assets/latest-posts-images/shoes-many.jpg";

const postsData = [
  {
    src: shoesSports,
    head: "Exercising",
    title: "The Importance of Proper Footwear",
    info: "When it comes to exercise, the right footwear can make all the difference. Whether you're hitting the pavement for a run or stepping into the gym for a workout, wearing proper athletic shoes is crucial for performance and injury prevention. A good pair of shoes provides support, cushioning, and stability, helping to absorb impact and reduce strain on your feet and joints. By choosing footwear designed for your specific activity and foot type, you can enhance your comfort, confidence, and overall exercise experience. Remember, investing in quality athletic shoes is an investment in your health and well-being.",
  },
  {
    src: sneakers,
    head: "Fashion Trends",
    title: "The Evolution of Sneakers",
    info: "Sneakers have come a long way from their humble beginnings as athletic footwear. Today, they're not just for the gym—they're a fashion statement. From classic canvas kicks to high-tech performance sneakers, the world of footwear fashion is constantly evolving. Sneakerheads eagerly await each new release, eager to get their hands on the latest styles and colorways. Whether you're into retro classics or cutting-edge designs, there's a sneaker out there to suit every taste and personality. So lace up your favorite pair, hit the streets, and show off your style with confidence.",
  },
  {
    src: shoesMany,
    head: "Finding the Perfect Fit",
    title: "A Guide to Shoe Shopping",
    info: "Shopping for shoes can be a daunting task, but with a little know-how, you can find the perfect pair every time. Start by measuring your feet—both length and width—to determine your size. Keep in mind that different brands and styles may fit differently, so don't be afraid to try on multiple sizes. When trying on shoes, pay attention to how they feel. They should be comfortable right out of the box, with no pinching or rubbing. Walk around in them to test the fit and support. And don't forget about style—choose shoes that not only feel good but also look great. With these tips in mind, you'll be stepping out in style and comfort in no time.",
  },
];

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img src={post.src} alt={post.head} className={styles.postImage} />
      <h4>{post.head}</h4>
      <h3>{post.title}</h3>
      <p>{post.info}</p>
      <Link to="#">READ MORE</Link>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    src: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default function LatestPosts() {
  return (
    <div className={styles.latestPostsSection}>
      <h2>Latest Posts</h2>
      <div className={styles.postsContainer}>
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
