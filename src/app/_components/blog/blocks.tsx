import { CodeBlockBlock } from '@/app/_blocks/CodeBlock'
import { ContentBlock } from '@/app/_blocks/Content'
import { toKebabCase } from '@/app/_utilities/toKebabCase'
import { Post } from '@/payload/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  code: CodeBlockBlock,
  content: ContentBlock
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
                <React.Fragment key={index}>
                  {/* @ts-expect-error */}
                  <Block id={toKebabCase(blockName)} key={index} {...block} />
                </React.Fragment>
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
