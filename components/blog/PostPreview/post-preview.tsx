import Link from "next/link";

import { Card, Element, Heading, Text } from "fictoan-react";

import { PostPreviewStyled } from "@/components/blog/PostPreview/PostPreview.styled";
import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";
import author from "@/interfaces/author";
// import Avatar from "../avatar";
// import CoverImage from "../cover-image";

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
                        <Text>{author.name}</Text>

                        <Text size="small">
                            <DateFormatter dateString={date} />
                        </Text>
                    </Element>
                </Card>
            </Link>
        </PostPreviewStyled>
    );
};

export default PostPreview;
