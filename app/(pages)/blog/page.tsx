import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/lib/formatDateTime";
import getPosts from "@/lib/posts";

export default async function Posts() {
    const posts = await getPosts();

    // Get the latest post and the remaining posts.
    const latestPost = posts[0]!;
    const remainingPosts = posts.slice(1);

    return (
        <div className="flex min-h-screen flex-col items-center bg-background bg-noise p-8 pt-24 md:p-12 md:pt-40">
            <div className="m-auto w-full max-w-screen-lg">
                <Link href={`/blog/${latestPost.slug}`}>
                    <Card className="flex min-h-80 flex-col justify-between rounded-3xl p-4">
                        <CardHeader>
                            <CardTitle className="text-lg font-medium">
                                <p className="flex size-fit items-center rounded-3xl bg-zinc-200 px-5 py-2">
                                    <Sparkles className="mr-1" size={20} />
                                    LATEST
                                </p>
                            </CardTitle>
                        </CardHeader>
                        <CardFooter className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold md:text-4xl">
                                {latestPost.title}
                            </h1>
                            <p className="pt-2 text-lg uppercase text-zinc-500">
                                {latestPost.date
                                    ? `${formatDateTime(latestPost.date)}, `
                                    : ""}
                                {latestPost.author.name}
                            </p>
                        </CardFooter>
                    </Card>
                </Link>
                <div className="mx-8 mt-16">
                    {remainingPosts.map((post) => {
                        const blogPost = post!;
                        return (
                            <div className="mb-6" key={blogPost.slug}>
                                <Link href={`/blog/${blogPost.slug}`}>
                                    <h1 className="text-2xl font-bold md:text-4xl">
                                        {blogPost.title}
                                    </h1>
                                </Link>
                                <p className="py-2 text-lg uppercase text-zinc-500">
                                    {blogPost.date
                                        ? `${formatDateTime(blogPost.date)}, `
                                        : ""}
                                    {blogPost.author.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
