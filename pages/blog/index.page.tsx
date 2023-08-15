import React from "react";
import { getAllPosts } from "@/lib/api";

import { Heading, Portion, Row } from "fictoan-react";

import { BlogStyled } from "@/pages/blog/blog.styled";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PostPreview from "@/components/blog/PostPreview/post-preview";
import Post from "@/interfaces/post";


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

            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="half">
                    <Heading as="h2">
                        Blog
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Row>
                        {allPosts.map((post) => (
                            <Portion desktopSpan="half" key={post.slug}>
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
                </Portion>
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
