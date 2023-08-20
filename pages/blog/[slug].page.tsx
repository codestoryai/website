import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Image from "next/image";

import { Element, Heading, Portion, Row, Text } from "fictoan-react";

import Header from "@/components/header/Header";
import DateFormatter from "../../utils/date-formatter";
import { PostStyled } from "../../styles/Post.styled";
import { Markdown } from "@/components/markdown/Markdown"
import { getPostBySlug, getAllPosts } from "@/lib/api";
import type PostType from "@/interfaces/post";
import Footer from "@/components/footer/Footer";
import { BlogStyled } from "@/pages/blog/blog.styled";

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
    content: string;
};

export default function Post({ post }: Props) {
    const router = useRouter();
    const title = `${post.title} | CodeStory`;
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <PostStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.24 }}
        >
            {router.isFallback ? (
                <Text>Loading…</Text>
            ) : (
                <>
                    <article>
                        <Header />

                        <Head>
                            <title>{title}</title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>

                        <BlogStyled>
                            <Row sidePadding="medium" marginTop="small">
                                <Portion>
                                    <Heading as="h1" className="headline">{post.title}</Heading>
                                </Portion>
                            </Row>

                            <Row sidePadding="medium" marginTop="small">
                                <Portion desktopSpan="one-fourth">
                                    <Row className="author-intro">
                                        <Portion verticallyCenterItems>
                                            <Image src={post.author.picture} width={48} height={48} className="author-image" />

                                            <Element as="div" marginLeft="nano">
                                                <Heading as="h6">{post.author.name}</Heading>
                                                <Text>
                                                    <DateFormatter dateString={post.date} />
                                                </Text>
                                            </Element>
                                        </Portion>
                                    </Row>

                                    <Heading as="h4">{post.excerpt}</Heading>
                                </Portion>

                                <Portion desktopSpan="three-fourth" className="blog-content">
                                    <Markdown content={post.content} />
                                </Portion>
                            </Row>
                        </BlogStyled>
                    </article>
                </>
            )}

            <Footer />
        </PostStyled>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, ["title", "date", "slug", "author", "content", "ogImage", "coverImage"]);

    return {
        props: {
            post: {
                ...post,
                content: post.content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
