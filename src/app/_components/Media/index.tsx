import React, { Fragment } from 'react'

import { Image } from './Image'
import { Video } from './Video'
import { Props } from './types'

export const Media: React.FC<Props> = props => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video')
  const Tag = (htmlElement as any) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <Video {...props} /> : <Image {...props} />}
    </Tag>
  )
}
