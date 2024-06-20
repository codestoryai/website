import { formatDateTime } from "@/lib/formatDateTime";
import { getPost } from "@/lib/posts";
import { PostBody } from "./components/post-body";

export default async function BlogPost({
    params
}: Readonly<{
    params: { slug: string };
}>) {
    const post = await getPost(params.slug);
    if (!post) {
        return null;
    }

    return (
        <div className="pt-80 bg-noise bg-background flex flex-col items-center">
            <div className="px-8 w-full bg-white">
                <div className="max-w-screen-md m-auto">
                    <div className="max-w-screen-sm m-auto -translate-y-44 md:-translate-y-[6rem]">
                        <h3 className="text-xl uppercase">
                            {post.date ? `${formatDateTime(post.date)}, ` : ''}
                            {post.author.name}
                        </h3>
                        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-wide">{post.title}</h1>
                        <div className="max-w-screen-md m-auto mt-16">
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
