import { readFile } from "node:fs/promises";
import path from "node:path";
import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import styles from "./page.module.css";

export const metadata = {
  title: "Learn | Bach Huy Hoang",
  description: "Knowledge notes rendered from learn.md",
};

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (isValidElement(node)) return getTextContent((node.props as { children?: ReactNode }).children);
  return "";
}

function linkifyQuestionRefs(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    const parts = node.split(/\b(Q\d{1,3})\b/g);
    if (parts.length === 1) return node;

    return parts.map((part, idx) => {
      const match = /^Q(\d{1,3})$/.exec(part);
      if (!match) return part;
      return (
        <a key={`${part}-${idx}`} href={`#q${match[1]}`} className={styles.qref}>
          {part}
        </a>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => <span key={idx}>{linkifyQuestionRefs(child)}</span>);
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    if (typeof element.type === "string" && (element.type === "a" || element.type === "code" || element.type === "pre")) {
      return node;
    }

    return cloneElement(element, {
      children: linkifyQuestionRefs(element.props.children),
    });
  }

  return node;
}

function renderQuestionHeading(
  Tag: "h2" | "h3" | "h4",
  children: ReactNode,
  props: Record<string, unknown>,
) {
  const text = getTextContent(children);
  const qMatch = text.match(/^\s*Q(\d{1,3})\b/i);
  const id = qMatch ? `q${qMatch[1]}` : (props.id as string | undefined);
  return <Tag {...props} id={id}>{children}</Tag>;
}

export default async function LearnPage() {
  const markdownPath = path.join(process.cwd(), "learn.md");
  const markdownContent = await readFile(markdownPath, "utf-8");
  const components: Components = {
    h2: ({ children, ...props }) => renderQuestionHeading("h2", children, props),
    h3: ({ children, ...props }) => renderQuestionHeading("h3", children, props),
    h4: ({ children, ...props }) => renderQuestionHeading("h4", children, props),
    td: ({ children, ...props }) => <td {...props}>{linkifyQuestionRefs(children)}</td>,
  };

  return (
    <main className={styles.page}>
      <article className={styles.markdown}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug, rehypeHighlight, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
          components={components}
        >
          {markdownContent}
        </ReactMarkdown>
      </article>
    </main>
  );
}
