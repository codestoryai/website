import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";

const PostPreviewStyled = styled.div`
  /* Add your custom styles here */
`;

const PostCard = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const PostHeading = styled.h2`
  /* Add your custom styles here */
`;

const Details = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    margin: 0;
  }
`;

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug, author }: Props) => {
  return (
    <PostPreviewStyled>
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <PostCard>
          <PostHeading>{title}</PostHeading>

          <Details>
            <Image src={author.picture} width={32} height={32} className="author-image" />

            <p className="card-text">{author.name}</p>

            <p>
              <DateFormatter dateString={date} />
            </p>
          </Details>
        </PostCard>
      </Link>
    </PostPreviewStyled>
  );
};

export default PostPreview;
