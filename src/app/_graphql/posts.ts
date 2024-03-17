import { CONTENT, MEDIA_BLOCK } from './blocks'
import { META } from './meta'

export const POSTS = `
  query Posts {
    Posts(limit: 300) {
      docs {
        id
        slug
        title
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
      }
    }
  }
`

export const POST = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
        layout {
          ${CONTENT}
          ${CONTENT}
          ${MEDIA_BLOCK}
        }
        ${META}
      }
    }
  }
`
