import MarkdownRender from '@/app/_components/blog/markdown'
import { Post } from '@/payload/payload-types'
import React from 'react'

type Props = Extract<Post['layout'][0], { blockType: 'code' }>

export const CodeBlockBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { codeblock } = props

  return (
    <div>
      <MarkdownRender mdString={codeblock} />
    </div>
  )
}
