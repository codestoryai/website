import type { Block } from 'payload/types'

import { lexicalHTML } from '@payloadcms/richtext-lexical'

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'richTextContent',
      type: 'richText'
    },
    lexicalHTML('richTextContent', { name: 'richTextContent_html' }),
  ],
}
