import { PostMetadata } from './types'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'

export const getPosts = cache(async () => {
    const posts = await fs.readdir('./posts/')

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === '.mdx')
            .map(async (file) => {
                const filePath = `./posts/${file}`
                const postContent = await fs.readFile(filePath, 'utf8')
                const metadata = postContent.match(/export const metadata = {([\s\S]*?)^}/m)?.[0]
                if (!metadata) {
                    return null
                }
                const metadataString = metadata.replace('export const metadata = ', '')
                const metadataObject = eval(`(${metadataString})`) as PostMetadata

                const content = postContent.replace(metadata, '')

                return { slug: file.replace('.mdx', ''), content, ...metadataObject }
            })
    )
})

export async function getPost(slug: string) {
    const posts = await getPosts()
    return posts.find((post) => post?.slug === slug)
}

export default getPosts
