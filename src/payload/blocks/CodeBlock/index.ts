import type { Block } from 'payload/types'

export const CodeBlock: Block = {
  slug: 'code',
  fields: [
    {
      name: 'codeblock',
      type: 'code',
      admin: {
        language: 'markdown',
      },
      required: true,
    },
  ],
}
