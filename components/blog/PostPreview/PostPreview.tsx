import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";

const PostPreviewStyled = styled.div`
  /* Add your custom styles here */
`;

const Card = styled.div`
  /* Add your custom styles here */
`;

const Element = styled.div`
  /* Add your custom styles here */
`;

const Heading = styled.h5`
  /* Add your custom styles here */
`;

const Portion = styled.div`
  /* Add your custom styles here */
`;

const Row = styled.div`
  /* Add your custom styles here */
`;

const Text = styled.p`
  /* Add your custom styles here */
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
        <Card className="post-card" padding="micro" shape="rounded">
          <Element as="header">
            <Heading as="h5" marginBottom="micro" className="title card-text">
              {title}
            </Heading>
          </Element>

          <Element as="footer">
            <Row marginBottom="nano">
              <Portion verticallyCenterItems>
                <Image src={author.picture} width={48} height={48} className="author-image" />

                <Element as="div" marginLeft="nano">
                  <Text className="card-text">{author.name}</Text>

                  <Text size="small" className="card-text">
                    <DateFormatter dateString={date} />
                  </Text>
                </Element>
              </Portion>
            </Row>
          </Element>
        </Card>
      </Link>
    </PostPreviewStyled>
  );
};

export default PostPreview;
