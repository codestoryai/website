import React from "react";

import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/blog/PostPreview/PostPreview";
import Post from "@/interfaces/post";
import { PostStyled } from "@/styles/Post.styled";
import { Title } from "@/components/typography";
import styled from "styled-components";

type BlogHomeProps = {
  allPosts: Post[];
};

const AllPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default function BlogHome({ allPosts }: BlogHomeProps) {
  return (
    <PostStyled>
      <Title>
        Blog
      </Title>

      <AllPosts>
        {allPosts.map((post) => (
          <PostPreview
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </AllPosts>
    </PostStyled>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
