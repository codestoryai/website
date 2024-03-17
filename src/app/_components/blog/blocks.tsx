import { ContentBlock } from '@/app/_blocks/Content'
import { MediaBlock } from '@/app/_blocks/MediaBlock'
import { toKebabCase } from '@/app/_utilities/toKebabCase'
import { Post } from '@/payload/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  content: ContentBlock,
  mediaBlock: MediaBlock,
}

export const Blocks: React.FC<{
  blocks: (Post['layout'][0])[]
}> = props => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <Block id={toKebabCase(blockName)} key={index} {...block} />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
