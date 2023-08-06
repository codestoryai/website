import Link from "next/link";

import { PostPreviewStyled } from "@/components/blog/PostPreview/PostPreview.styled";

import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import type Author from "@/interfaces/author";
import { Card, Heading, Text } from "fictoan-react";

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
                         coverImage,
                         date,
                         excerpt,
                         author,
                         slug,
                     }: Props) => {
    return (
        <PostPreviewStyled>
            <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]"
            >
                <Card padding="micro" shape="rounded">
                    <CoverImage slug={slug} title={title} src={coverImage} />

                    <Heading as="h5">{title}</Heading>


                    {/*<Text className="post-excerpt">{excerpt}</Text>*/}

                    <Avatar name={author.name} picture={author.picture} />

                    <Text size="small" className="text-lg mb-4">
                        <DateFormatter dateString={date} />
                    </Text>
                </Card>
            </Link>
        </PostPreviewStyled>
    );
};

export default PostPreview;
