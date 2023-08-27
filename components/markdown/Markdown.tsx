import Image from "next/future/image";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdownComponents: object = {
	p(paragraph: { children?: boolean; node?: any }) {
		const { node } = paragraph

		if (node.children[0].tagName === "img") {
			const image = node.children[0]
			const blurSupported = image.properties.src.split(".").pop() in ["jpg", "png", "webp", "avif"]
			const metastring = image.properties.alt
			const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
			const isPriority = metastring?.toLowerCase().match('{priority}')
			const hasCaption = metastring?.toLowerCase().includes('{caption:')
			const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

			return (
				<div className="postImgWrapper">
					<Image
						src={image.properties.src}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto', paddingBottom: "24px" }}
						className="postImg"
						alt={alt}
						priority={isPriority}
						placeholder={blurSupported ? "blur" : "empty"}
					/>
					{hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
				</div>
			)
		}
		return <p>{paragraph.children}</p>
	},
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
			<SyntaxHighlighter
				{...props}
				children={String(children).replace(/\n$/, '')}
				style={theme}
				language={match[1]}
				PreTag="div"
			/>
		) : (
			<code {...props} className={className}>
				{children}
			</code>
		)
	}
}

type MarkdownProps = {
	content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
	return (
		<>
			<ReactMarkdown
				children={content}
				components={markdownComponents}
				rehypePlugins={[rehypeRaw, remarkGfm]}
			/>
		</>
	)
}
