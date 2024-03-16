import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const POSTS = `
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
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
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        relatedPosts {
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`
