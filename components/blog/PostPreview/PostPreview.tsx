import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";
import { theme } from "@/styles/theme";

const PostPreviewStyled = styled.a`
  /* Add your custom styles here */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const AuthorDetails = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostHeading = styled.h2`
  /* Add your custom styles here */
  color: ${theme.headingColored};
`;

const Details = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  & > p {
    margin: 0;
  }
  time {
    color: ${theme.fadeText};
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
    <Link as={`/blog/${slug}`} href="/blog/[slug]">
      <PostPreviewStyled>
        <PostHeading>{title}</PostHeading>

        <Details>
          <AuthorDetails className="card-text">
            <Image src={author.picture} width={32} height={32} className="author-image" /> {author.name}
          </AuthorDetails>

          <p>
            <DateFormatter dateString={date} />
          </p>
        </Details>
      </PostPreviewStyled>
    </Link>
  );
};

export default PostPreview;
