import Image from "next/image";
import Link from "next/link";
import { Card, Element, Heading, Portion, Row, Text } from "fictoan-react";

import { PostPreviewStyled } from "@/components/blog/PostPreview/PostPreview.styled";
import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const PostPreview = ({
    title,
    date,
    excerpt,
    slug,
    author,
}: Props) => {
    return (
        <PostPreviewStyled>
            <Link
                as={`/blog/${slug}`}
                href="/blog/[slug]"
            >
                <Card className="post-card" padding="micro" shape="rounded">
                    <Element as="header">
                        <Heading as="h5" marginBottom="micro">{title}</Heading>
                    </Element>

                    <Element as="footer">
                        <Row marginBottom="nano">
                            <Portion verticallyCenterItems>
                                <Image src={author.picture} width={48} height={48} className="author-image" />

                                <Element as="div" marginLeft="nano">
                                    <Text>{author.name}</Text>

                                    <Text size="small">
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
