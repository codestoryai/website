'use client'

import NextImage, { StaticImageData } from 'next/image'
import React from 'react'

import { Props as MediaProps } from './types'

const breakpoints = {
  l: 1440,
  m: 1024,
  s: 768,
}

export const Image: React.FC<MediaProps> = props => {
  const {
    alt: altFromProps,
    fill,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    src: srcFromProps,
  } = props

  const [, setIsLoading] = React.useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource !== 'string') {
    const {
      alt: altFromResource,
      filename: fullFilename,
      height: fullHeight,
      width: fullWidth,
    } = resource

    // @ts-expect-error
    width = fullWidth
    // @ts-expect-error
    height = fullHeight
    alt = altFromResource

    const filename = fullFilename

    src = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  return (
    <NextImage
      alt={alt || ''}
      fill={fill}
      height={!fill ? height : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      }}
      priority={priority}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  )
}
