import { Code } from "bright";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { MDXImage } from "./mdx-image";

export const mdxComponents: MDXComponents = {
    a: ({ children, ...props }) => {
        return (
            <Link {...props} href={props.href || ""}>
                {children}
            </Link>
        );
    },
    img: MDXImage as any,
    pre: Code,
};
