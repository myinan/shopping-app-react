import shoesSports from "../assets/latest-posts-images/shoes-sports.jpg";
import sneakers from "../assets/latest-posts-images/sneakers.jpg";
import shoesMany from "../assets/latest-posts-images/shoes-many.jpg";
import BlogPosts from "../../../components/BlogPosts/BlogPosts";

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

export default function LatestPosts() {
  return <BlogPosts postsData={postsData} title={"LATEST POSTS"} />;
}
