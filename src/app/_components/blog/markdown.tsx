/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/_components/ui/tooltip";
import { Copy } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("rust", rust);

interface MarkdownRenderProps {
  mdString: string;
}

export default function MarkdownRender({ mdString }: MarkdownRenderProps) {
  return (
    <ReactMarkdown
      components={{
        code({ className, ...props }) {
          const hasLang = /language-(\w+)/.exec(className || "");
          return hasLang ? (
            <SyntaxHighlighter
              PreTag="div"
              customStyle={{ alignItems: "center", display: "flex", minHeight: "72px" }}
              language={hasLang[1]}
              style={oneLight}
              useInlineStyles
            >
              {String(props.children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props} />
          );
        },
        pre(pre) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const codeChunk = (pre.children as any).props.node.children[0].value;
          const [isOpen, setIsOpen] = React.useState(false);
          const [copyTip, setCopyTip] = React.useState("Copy");

          const language =
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (pre.children as any).props.className.replace(
              /language-/g,
              ""
            ) as string;

          const onClick = () => {
            const isPopupOpen = isOpen;
            if (!isPopupOpen) {
              setIsOpen(true);
            }
            void navigator.clipboard.writeText(codeChunk);
            setCopyTip("Copied!");
            setTimeout(() => {
              if (!isPopupOpen) {
                setIsOpen(false);
              }
              setTimeout(() => {
                setCopyTip("Copy");
              }, 100);
            }, 1000);
          }

          return <div className="relative">
            <div
              className="absolute top-0 right-0 p-2 text-sm bg-background bg-opacity-50 rounded-tr-md cursor-pointer"
              onClick={onClick}
              onKeyDown={(e) => e.key === "Enter" && onClick()}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              role="button"
              tabIndex={0}
            >
              <Tooltip open={isOpen}>
                <TooltipTrigger asChild>
                  <Copy size={15} />
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={12}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="px-2 py-1">
                      <p>{copyTip}</p>
                    </CardContent>
                  </Card>
                </TooltipContent>
              </Tooltip>
            </div>
            <span
              className="absolute bottom-0 right-0 p-2 text-sm bg-background bg-opacity-50 rounded-bl-md"
            >
              {language}
            </span>
            <pre {...pre} />
          </div>
        },
      }}
    >
      {mdString}
    </ReactMarkdown>
  );
}
