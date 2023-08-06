import Link from "next/link";

import { Card, Heading, Text } from "fictoan-react";

import { PostPreviewStyled } from "@/components/blog/PostPreview/PostPreview.styled";
import DateFormatter from "@/utils/date-formatter";
import type Author from "@/interfaces/author";
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
                     }: Props) => {
    return (
        <PostPreviewStyled>
            <Link
                as={`/blog/${slug}`}
                href="/blog/[slug]"
            >
                <Card padding="micro" shape="rounded">
                    <Heading as="h5">{title}</Heading>

                    {/*<Text className="post-excerpt">{excerpt}</Text>*/}

                    {/*<Avatar name={author.name} picture={author.picture} />*/}

                    <Text size="small">
                        <DateFormatter dateString={date} />
                    </Text>
                </Card>
            </Link>
        </PostPreviewStyled>
    );
};

export default PostPreview;
