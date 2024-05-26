import styles from "./BlogPosts.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

export default function BlogPosts({ postsData, title }) {
  return (
    <div className={styles.blogPostsSection}>
      <h2>{title}</h2>
      <div className={styles.postsContainer}>
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

BlogPosts.propTypes = {
  postsData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
