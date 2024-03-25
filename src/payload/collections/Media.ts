import type { CollectionConfig } from 'payload/types'

import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText'
    },
  ],
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
}
