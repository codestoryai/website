import type { Post } from '@/payload/payload-types'

import { fetchDocs } from '@/app/_api/fetchDocs'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { Card, CardFooter, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { WaitlistContextProvider } from '@/app/_components/waitlist'
import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { fetchLatestRelease } from '@/app/_utilities/github'
import { DeviceDetails, cleanDeviceDetails } from '@/app/_utilities/ua'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function Post() {
  const latestRelease = await fetchLatestRelease()
  let deviceDetails: DeviceDetails | undefined
  if (latestRelease.current) {
    deviceDetails = cleanDeviceDetails(latestRelease.current)
  }

  let posts: Post[] = []
  try {
    posts = await fetchDocs<Post>('posts')
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // eslint-disable-next-line no-console
    console.error(error)
  }

  if (posts.length === 0) {
    return (
      <WaitlistContextProvider deviceDetails={deviceDetails}>
        <Header logoSuffix={{ path: '/blog', text: 'blog' }} />
        <div className="p-8 md:p-12 pt-48 bg-noise bg-background flex flex-col items-center">
          <div className="w-full max-w-screen-lg m-auto">
            <h1 className="text-4xl font-bold">No posts found</h1>
          </div>
        </div>
        <Footer />
      </WaitlistContextProvider>
    )
  }

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.publishedAt ? b.publishedAt : Date.now().toString()).getTime() -
      new Date(a.publishedAt ? a.publishedAt : Date.now().toString()).getTime()
    )
  })
  const latestPost = sortedPosts[0]
  const remainingPosts = sortedPosts.slice(1)

  return (
    <WaitlistContextProvider deviceDetails={deviceDetails}>
      <Header logoSuffix={{ path: '/blog', text: '| Blog' }} />
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
                  {latestPost.publishedAt ? `${formatDateTime(latestPost.publishedAt)}, ` : ''}
                  {latestPost.populatedAuthors?.map(author => author.name).join(', ')}
                </p>
              </CardFooter>
            </Card>
          </Link>
          <div className="mt-16 mx-8">
            {remainingPosts.map(post => {
              return (
                <div className="mb-6" key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <h1 className="text-2xl md:text-4xl font-bold">{post.title}</h1>
                  </Link>
                  <p className="text-zinc-500 text-lg py-2 uppercase">
                    {post.publishedAt ? `${formatDateTime(post.publishedAt)}, ` : ''}
                    {post.populatedAuthors?.map(author => author.name).join(', ')}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </WaitlistContextProvider>
  )
}
