import { Post } from '@/payload/payload-types'
import React from 'react'

// @ts-expect-error
type Props = Extract<Post['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  Props & {
    id?: string
  }
> = props => {
  const { richTextContent_html } = props

  return (
    <article className='prose'>
      <div dangerouslySetInnerHTML={{ __html: richTextContent_html }} />
    </article>
  )
}
