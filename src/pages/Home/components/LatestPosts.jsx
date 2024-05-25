import styles from "../Home.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import shoesSports from "../assets/latest-posts-images/shoes-sports.jpg";
import sneakers from "../assets/latest-posts-images/sneakers.jpg";
import shoesMany from "../assets/latest-posts-images/shoes-many.jpg";

const postsData = [
  {
    src: shoesSports,
    head: "Exercising",
    title: "The Importance of Proper Footwear",
    info: `When it comes to exercise, the right footwear can make all the difference. 
    Whether you're hitting the pavement for a run or stepping into the gym for a workout, 
    wearing proper athletic shoes is crucial for performance and injury prevention.`,
  },
  {
    src: sneakers,
    head: "Fashion Trends",
    title: "The Evolution of Sneakers",
    info: `Sneakers have come a long way from their humble beginnings as athletic footwear. 
    Today, they're not just for the gym—they're a fashion statement. 
    From classic canvas kicks to high-tech performance sneakers, 
    the world of footwear fashion is constantly evolving.`,
  },
  {
    src: shoesMany,
    head: "Finding the Perfect Fit",
    title: "A Guide to Shoe Shopping",
    info: `Shopping for shoes can be a daunting task, but with a little know-how, 
    you can find the perfect pair every time. 
    Start by measuring your feet—both length and width—to determine your size.`,
  },
];

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img src={post.src} alt={post.head} className={styles.postImage} />
      <h5>{post.head}</h5>
      <h3>{post.title}</h3>
      <p>{post.info}</p>
      <Link to="readmore">READ MORE</Link>
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
      <h2>LATEST POSTS</h2>
      <div className={styles.postsContainer}>
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
