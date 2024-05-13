import StoryHeader from "./components/StoryHeader";
import StoryMain from "./components/StoryMain";
import StoryPhilanthropy from "./components/StoryPhilanthropy";
import StoryBlog from "./components/StoryBlog";

export default function AboutUsPage() {
  return (
    <main>
      <StoryHeader />
      <StoryMain />
      <StoryPhilanthropy />
      <StoryBlog />
    </main>
  );
}
