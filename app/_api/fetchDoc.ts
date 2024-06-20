import type { Config } from '@/payload/payload-types'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { POST } from '@/app/_graphql/posts'

import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

const queryMap = {
  posts: {
    key: 'Posts',
    query: POST,
  },
}

export const fetchDoc = async <T>(args: {
  collection: keyof Config['collections']
  draft?: boolean
  id?: string
  slug?: string
}): Promise<T> => {
  const { slug, collection, draft } = args || {}

  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const doc: T = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables: {
        slug,
        draft,
      },
    }),
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    method: 'POST',
    next: { tags: [`${collection}_${slug}`] },
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc')
      return res?.data?.[queryMap[collection].key]?.docs?.[0]
    })

  return doc
}
