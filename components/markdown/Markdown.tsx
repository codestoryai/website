import Image from "next/future/image";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import aideCode from "../../styles/code";
import { Icon } from "@iconify/react";
import { icons } from "content/icons";

/** This heading modifier adds a id tag by slugging the heading text and a link icon for link to the heading */
const headingModifier = (heading: { children?: string[]; level: number } & any) => {
  const node = heading;
  console.log(node);

  if (!node.children || !node.children[0]) return <h1>{heading.children}</h1>;

  const children = node.children[0];
  const text = children;
  console.log({ node, children, text });
  if (!text) return <h1>{heading.children}</h1>;
  const slug = text
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^\w-]/g, "");
  const link = `#${slug}`;

  const Heading = `h${heading.level ?? 2}` as keyof JSX.IntrinsicElements;

  return (
    <Heading id={slug} className="heading">
      {heading.children}
      <a href={link} className="headingLink">
        <Icon icon={icons.headingLink} />
      </a>
    </Heading>
  );
};

const markdownComponents: object = {
  h1: headingModifier,
  h2: headingModifier,
  h3: headingModifier,
  h4: headingModifier,
  h5: headingModifier,
  h6: headingModifier,
  p(paragraph: { children?: boolean; node?: any }) {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];
      const blurSupported = image.properties.src.split(".").pop() in ["jpg", "png", "webp", "avif"];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
      const isPriority = metastring?.toLowerCase().match("{priority}");
      const hasCaption = metastring?.toLowerCase().includes("{caption:");
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className="postImgWrapper">
          <Image
            src={image.properties.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", paddingBottom: "24px" }}
            className="postImg"
            alt={alt}
            priority={isPriority}
            placeholder={blurSupported ? "blur" : "empty"}
          />

          {hasCaption ? (
            <div className="caption" aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }

    return <p>{paragraph.children}</p>;
  },

  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, "")}
        style={aideCode as any}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
};

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      className="markdownContent"
      children={content}
      components={markdownComponents}
      rehypePlugins={[rehypeRaw, remarkGfm]}
    />
  );
};
