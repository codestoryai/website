import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { mdxComponents } from "./markdown-components";

export function PostBody({ children }: { children: string }) {
    return (
        <MDXRemote
            source={children}
            options={{
                mdxOptions: {
                    remarkPlugins: [
                        // Adds support for GitHub Flavored Markdown
                        remarkGfm,
                        // Makes emojis more accessible
                        remarkA11yEmoji,
                    ],
                    // These work together to add IDs and linkify headings
                    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                },
            }}
            components={mdxComponents}
        />
    );
}
