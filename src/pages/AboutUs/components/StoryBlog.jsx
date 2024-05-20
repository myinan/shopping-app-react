import styles from "../AboutUs.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import firstImg from "../assets/story-blog-images/blog-image-first.jpg";
import secondImg from "../assets/story-blog-images/blog-image-second.jpg";
import thirdImg from "../assets/story-blog-images/blog-image-third.jpg";

const postsData = [
  {
    src: firstImg,
    head: "Give your thoughts",
    title: "Which brands do you want to see added?",
    info: `Your feedback is essential in shaping our collection. 
    Whether it's a trendy sneaker brand, a classic boot label, or a sustainable footwear line, 
    we want to hear from you. Help us tailor our selection to better suit your needs and preferences. 
    Share your suggestions with us, and let's build the ultimate footwear destination together!"`,
  },
  {
    src: secondImg,
    head: "Boots care",
    title: "How to keep your boots brand new",
    info: `Your boots are more than just footwear; they're an investment in style and functionality. 
    To ensure they stay in top condition and continue to elevate your look, follow these simple tips. 
    First, regularly clean your boots with a soft brush or cloth to remove dirt and debris. 
    For leather boots, apply a conditioning cream to keep the material supple and moisturized.`,
  },
  {
    src: thirdImg,
    head: "Journeys",
    title: "Stories from our customers",
    info: `Each customer story is a testament to the quality, comfort, and style of our products. 
    We're grateful for the trust they place in us and feel honored to be a part of their lives. 
    Read on to discover inspiring tales from our valued customers and see how our 
    footwear has made a difference in their lives.`,
  },
];

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img src={post.src} alt={post.head} className={styles.postImage} />
      <h6>{post.head}</h6>
      <h4>{post.title}</h4>
      <p>{post.info}</p>
      <Link to="/blog">READ MORE</Link>
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

export default function StoryBlog() {
  return (
    <div className={styles.blogPostsSection}>
      <h2>VISIT OUR BLOG</h2>
      <div className={styles.postsContainer}>
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
