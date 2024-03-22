import { MEDIA } from './media'

export const CONTENT = `
...on Content {
  blockType
  columns {
    richText
    enableLink
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  position
  ${MEDIA}
}
`
