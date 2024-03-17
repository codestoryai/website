import type { Post } from '@/payload/payload-types'

import { fetchDoc } from '@/app/_api/fetchDoc'
import { fetchDocs } from '@/app/_api/fetchDocs'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React from 'react'
// import { Blocks } from '@/app/_components/Blocks'
// import { Gutter } from '@/app/_components/Gutter'
import { generateMeta } from '@/app/_utilities/generateMeta'

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

//   const { layout, relatedPosts, title } = post

  return (
    <React.Fragment>
      {/* <Gutter>
        <h1>{title}</h1>
      </Gutter>
      <Blocks blocks={layout} />
      <Blocks
        blocks={[
          {
            blockName: 'Related Posts',
            blockType: 'relatedPosts',
            docs: relatedPosts,
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Related posts',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'The posts displayed here are individually selected for this page. Admins can select any number of related posts to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate posts complete with pagination. To manage related posts, ',
                  },
                  {
                    type: 'link',
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                    url: `/admin/collections/posts/${post.id}`,
                  },
                  {
                    text: '.',
                  },
                ],
              },
            ],
            relationTo: 'posts',
          },
        ]}
        disableTopPadding
      /> */}
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

  return generateMeta({ doc: post })
}
