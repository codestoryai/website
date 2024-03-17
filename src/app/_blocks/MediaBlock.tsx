import { Media } from '@/app/_components/Media'
import { Post } from '@/payload/payload-types'
import { StaticImageData } from 'next/image'
import React from 'react'

type Props = Extract<Post['layout'][0], { blockType: 'mediaBlock' }> & {
    id?: string
    staticImage?: StaticImageData
}

export const MediaBlock: React.FC<Props> = props => {
    const { media, position = 'default', staticImage } = props

    let caption
    if (media && typeof media === 'object') caption = media.caption

    return (
        <div>
            {position === 'fullscreen' && (
                <div>
                    <Media resource={media} src={staticImage} />
                </div>
            )}
            {position === 'default' && (
                <Media resource={media} src={staticImage} />
            )}
            {caption && (
                <div>{caption}</div>
            )}
        </div>
    )
}
