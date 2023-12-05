import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

import DateFormatter from "../../utils/date-formatter";
import { PostStyled } from "../../styles/Post.styled";
import { Markdown } from "@/components/markdown/Markdown";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import type PostType from "@/interfaces/post";
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
        <div>Loading…</div>
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>

          <h1 className="post-title">
            {post.title}
          </h1>
          <p>
            <DateFormatter dateString={post.date} />
          </p>

          <div className="author-intro">
            <Image src={post.author.picture} width={56} height={56} className="author-image" />

            <div>
              {post.author.name}
            </div>
            {(post.author.twitter || post.author.github || post.author.linkedin) && (
              <div>
                {post.author.twitter && (
                  <Link href={post.author.twitter} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <FaTwitter style={{ marginRight: 8 }} />
                    </a>
                  </Link>
                )}
                {post.author.github && (
                  <Link href={post.author.github} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <TbBrandGithubFilled style={{ marginRight: 8 }} />
                    </a>
                  </Link>
                )}
                {post.author.linkedin && (
                  <Link href={post.author.linkedin} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </Link>
                )}
              </div>
            )}
          </div>
          <h4>{post.excerpt}</h4>

          <Markdown content={post.content} />
        </>
      )}
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
