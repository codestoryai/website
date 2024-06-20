import Link from 'next/link';
import { Sparkles } from 'lucide-react'

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDateTime } from '@/lib/formatDateTime';
import getPosts from '@/lib/posts';

export default async function Posts() {
    const posts = await getPosts();

    // Get the latest post and the remaining posts.
    const latestPost = posts[0]!;
    const remainingPosts = posts.slice(1);

    return (
        <div className="p-8 md:p-12 pt-24 md:pt-40 bg-noise bg-background flex flex-col items-center">
            <div className="w-full max-w-screen-lg m-auto">
                <Link href={`/blog/${latestPost.slug}`}>
                    <Card className="rounded-3xl p-4 min-h-80 flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="text-lg font-medium">
                                <p className="bg-zinc-200 rounded-3xl size-fit py-2 px-5 flex items-center">
                                    <Sparkles className="mr-1" size={20} />
                                    LATEST
                                </p>
                            </CardTitle>
                        </CardHeader>
                        <CardFooter className="flex flex-col items-start">
                            <h1 className="text-2xl md:text-4xl font-bold">{latestPost.title}</h1>
                            <p className="uppercase text-zinc-500 text-lg pt-2">
                                {latestPost.date ? `${formatDateTime(latestPost.date)}, ` : ''}
                                {latestPost.author.name}
                            </p>
                        </CardFooter>
                    </Card>
                </Link>
                <div className="mt-16 mx-8">
                    {remainingPosts.map(post => {
                        const blogPost = post!;
                        return (
                            <div className="mb-6" key={blogPost.slug}>
                                <Link href={`/blog/${blogPost.slug}`}>
                                    <h1 className="text-2xl md:text-4xl font-bold">{blogPost.title}</h1>
                                </Link>
                                <p className="text-zinc-500 text-lg py-2 uppercase">
                                    {blogPost.date ? `${formatDateTime(blogPost.date)}, ` : ''}
                                    {blogPost.author.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
