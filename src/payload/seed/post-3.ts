import type { Post } from '../payload-types'

export const post3: Partial<Post> = {
  title: 'Post 3',
  slug: 'post-3',
  _status: 'published',
  meta: {
    title: 'Post 3',
    description: 'This is the third post.',
    image: '{{IMAGE}}',
  },
  authors: ['{{AUTHOR}}'],
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          richText: [
            {
              children: [
                {
                  text: "This content is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                },
              ],
            },
          ],
          link: {
            reference: null,
            url: '',
            label: '',
          },
        },
      ],
    },
  ],
  relatedPosts: [], // this is populated by the seed script
}
