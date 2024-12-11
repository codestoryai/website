import { PostMetadata } from "./types";
import path from "path";
import fs from "fs/promises";
import { cache } from "react";

export const getPosts = cache(async () => {
    const posts = await fs.readdir(path.join(process.cwd(), "posts"));

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === ".mdx")
            .map(async (file) => {
                const filePath = `./posts/${file}`;
                const postContent = await fs.readFile(filePath, "utf8");
                const metadata = postContent.match(
                    /export const metadata = {([\s\S]*?)^};/m
                )?.[0];
                if (!metadata) {
                    return null;
                }

                const metadataString = metadata.replace(
                    "export const metadata = ",
                    ""
                ).replace(/;$/, ""); // Remove trailing semicolon for eval
                const metadataObject = eval(
                    `(${metadataString})`
                ) as PostMetadata;

                const content = postContent.replace(metadata, "").trim();


                return {
                    slug: file.replace(".mdx", ""),
                    content,
                    ...metadataObject,
                };
            })
    ).then((meta) =>
        meta
            .filter((post) => post !== null)
            .sort((a, b) => (new Date(a!.date) > new Date(b!.date) ? -1 : 1))
    );
});

export async function getPost(slug: string) {
    const posts = await getPosts();
    return posts.find((post) => post?.slug === slug);
}

export default getPosts;
