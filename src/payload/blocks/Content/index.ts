import type { Block, Field } from 'payload/types'

import richText from '../../fields/richText'

const columnFields: Field[] = [
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
]

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
