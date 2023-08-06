import { getAllPosts } from "@/lib/api";

import Header from "@/components/header/Header";
import { BlogStyled } from "@/pages/blog/blog.styled";

import HeroPost from "@/components/blog/hero-post";
import MoreStories from "@/components/blog/more-stories";
import Post from "@/interfaces/post";
import PostPreview from "@/components/blog/PostPreview/post-preview";
import { Portion, Row } from "fictoan-react";
import Footer from "@/components/footer/Footer";

type Props = {
    posts: Post[];
};

type BlogHomeProps = {
    allPosts: Post[];
};

export default function BlogHome({allPosts}: BlogHomeProps) {
    const heroPost  = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <BlogStyled>
            <Header />

            <Row sidePadding="large" marginTop="small">
                {allPosts.map((post) => (
                    <Portion desktopSpan="one-fourth" key={post.slug}>
                        <PostPreview
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    </Portion>
                ))}
            </Row>

            <Footer />
        </BlogStyled>
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
        props : {allPosts},
    };
};
