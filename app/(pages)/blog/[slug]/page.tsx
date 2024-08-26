import { Metadata, ResolvingMetadata } from "next";

import { formatDateTime } from "@/lib/formatDateTime";
import { getPost } from "@/lib/posts";
import { PostBody } from "./components/post-body";

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getPost(params.slug);
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: post?.title,
        description: post?.excerpt,
        openGraph: {
            images: post?.ogImage
                ? [post.ogImage, ...previousImages]
                : previousImages,
        },
    };
}

export default async function BlogPost({
    params,
}: Readonly<{
    params: { slug: string };
}>) {
    const post = await getPost(params.slug);
    if (!post) {
        return null;
    }

    return (
        <div className="flex flex-col items-center bg-background bg-noise pt-80">
            <div className="w-full bg-white px-8">
                <div className="m-auto max-w-screen-md">
                    <div className="m-auto max-w-screen-sm -translate-y-44 md:-translate-y-[6rem]">
                        <h3 className="text-xl uppercase">
                            {post.date ? `${formatDateTime(post.date)}, ` : ""}
                            {post.author.name}
                        </h3>
                        <h1 className="mt-4 text-4xl font-bold tracking-wide md:text-6xl">
                            {post.title}
                        </h1>
                        <div className="m-auto mt-16 max-w-screen-md">
                            <article className="prose lg:prose-xl">
                                <PostBody>{post.content}</PostBody>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
