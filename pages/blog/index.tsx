import HeroPost from "@/components/hero-post";
import MoreStories from "@/components/more-stories";
import { getAllPosts } from "@/lib/api";
import Post from "@/interfaces/post";
import Container from "@/components/container";
import Intro from "@/components/intro";
import Footer from "@/components/footer";

type BlogHomeProps = {
  allPosts: Post[];
};

export default function BlogHome({ allPosts }: BlogHomeProps) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Container>
      <Intro isBlog />
      <div className="mt-16">
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
      <Footer />
    </Container>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
