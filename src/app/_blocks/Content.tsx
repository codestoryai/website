import RichText from '@/app/_components/RichText'
import { Post } from '@/payload/payload-types'
import React from 'react'

type Props = Extract<Post['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <div>
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { richText } = col

          return (
            <div key={index}>
              <RichText content={richText} />
            </div>
          )
        })}
    </div>
  )
}
