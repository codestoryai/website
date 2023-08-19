import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism"

type MarkdownProps = {
	content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
	return (
		<ReactMarkdown
			children={content}
			components={{
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
			}}
		/>
	)
}
