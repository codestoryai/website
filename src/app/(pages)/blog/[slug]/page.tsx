import type { Post } from '@/payload/payload-types'

import { fetchDoc } from '@/app/_api/fetchDoc'
import { fetchDocs } from '@/app/_api/fetchDocs'
import { Blocks } from '@/app/_components/blog/blocks'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { generateMeta } from '@/app/_utilities/generateMeta'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Post({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let post: Post | null = null

  try {
    post = await fetchDoc<Post>({
      slug,
      collection: 'posts',
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!post) {
    notFound()
  }

  const { layout, title } = post;

  return (
    <React.Fragment>
      <Header logoSuffix={{ path: "/blog", text: "blog" }} />
      <div className="pt-80 bg-noise bg-background flex flex-col items-center">
        <div className="px-12 w-full bg-white">
          <div className='max-w-screen-md m-auto'>
            <div className='max-w-screen-sm m-auto -translate-y-[5.3rem]'>
              <h3 className='text-xl uppercase'>Feb. 29, 2024</h3>
              <h1 className='mt-4 text-4xl md:text-5xl font-bold tracking-wide'>
                {title}
              </h1>
              <div className='max-w-screen-md m-auto mt-8'>
                {/* @ts-expect-error */}
                <Blocks blocks={layout} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const posts = await fetchDocs<Post>('posts')
    return posts?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let post: Post | null = null

  try {
    post = await fetchDoc<Post>({
      slug,
      collection: 'posts',
      draft: isDraftMode,
    })
  } catch (error) { /* empty */ }

  // @ts-expect-error
  return generateMeta({ doc: post })
}
