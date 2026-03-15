"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { ReactNode, Fragment } from "react";
import FootnoteTooltip from "./FootnoteTooltip";
import { getFootnote } from "@/lib/parseFootnotes";
import type { Components } from "react-markdown";
import GlossaryTooltip from "./GlossaryTooltip";
import { GLOSSARY_TERMS } from "@/lib/constants";

const MotionH1 = motion.h1 as React.FC<React.HTMLAttributes<HTMLHeadingElement> & { 
  initial?: object; 
  whileInView?: object; 
  viewport?: object; 
  transition?: object;
}>;
const MotionH2 = motion.h2 as React.FC<React.HTMLAttributes<HTMLHeadingElement> & { 
  initial?: object; 
  whileInView?: object; 
  viewport?: object; 
  transition?: object;
}>;
const MotionH3 = motion.h3 as React.FC<React.HTMLAttributes<HTMLHeadingElement> & { 
  initial?: object; 
  whileInView?: object; 
  viewport?: object; 
  transition?: object;
}>;
const MotionBlockquote = motion.blockquote as React.FC<React.HTMLAttributes<HTMLQuoteElement> & { 
  initial?: object; 
  whileInView?: object; 
  viewport?: object; 
  transition?: object;
}>;
const MotionTable = motion.table as React.FC<React.HTMLAttributes<HTMLTableElement> & { 
  initial?: object; 
  whileInView?: object; 
  viewport?: object; 
  transition?: object;
}>;

interface MarkdownRendererProps {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}


function processFootnotesAndGlossary(text: string): ReactNode[] {
  let parts: ReactNode[] = [];
  const footnoteRegex = /\[\^(\d+)\]/g;
  let lastIndex = 0;
  let match;

  // First pass: Footnotes
  while ((match = footnoteRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const footnoteNumber = parseInt(match[1]);
    const footnote = getFootnote(footnoteNumber);
    
    parts.push(
      <FootnoteTooltip
        key={`footnote-${match.index}-${footnoteNumber}`}
        number={footnoteNumber}
        footnote={footnote}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // Second pass: Glossary Terms
  let finalParts: ReactNode[] = [];
  parts.forEach((part, i) => {
    if (typeof part === "string") {
      let subIndex = 0;
      const termRegex = new RegExp(`(${GLOSSARY_TERMS.join("|")})`, "g");
      let termMatch;
      
      while ((termMatch = termRegex.exec(part)) !== null) {
        if (termMatch.index > subIndex) {
          finalParts.push(part.slice(subIndex, termMatch.index));
        }
        
        finalParts.push(
          <GlossaryTooltip key={`glossary-${i}-${termMatch.index}`} term={termMatch[1]}>
            {termMatch[1]}
          </GlossaryTooltip>
        );
        subIndex = termMatch.index + termMatch[0].length;
      }
      
      if (subIndex < part.length) {
        finalParts.push(part.slice(subIndex));
      }
    } else {
      finalParts.push(part);
    }
  });

  return finalParts;
}

function processChildren(children: ReactNode): ReactNode {
  if (typeof children === "string") {
    return processFootnotesAndGlossary(children);
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => {
      if (typeof child === "string") {
        return <Fragment key={index}>{processFootnotesAndGlossary(child)}</Fragment>;
      }
      return child;
    });
  }

  return children;
}

const customComponents: Components = {
  h1: ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <MotionH1
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-[2.25rem] font-bold leading-tight text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] mt-12 mb-6 scroll-mt-6"
      >
        {children}
      </MotionH1>
    );
  },

  h2: ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <MotionH2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif font-semibold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] scroll-mt-6"
      >
        {children}
      </MotionH2>
    );
  },

  h3: ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <MotionH3
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif font-semibold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] scroll-mt-6"
      >
        {children}
      </MotionH3>
    );
  },

  p: ({ children, ...props }) => {
    // We can use a simple trick to identify the first paragraph if we want to automate it,
    // or just check for a specific marker. For now, we'll apply it to the very first 'p' tag
    // using a CSS-like logic in React or just a simple class.
    return (
      <p className="text-[var(--foreground)] first-of-type:drop-cap">
        {processChildren(children)}
      </p>
    );
  },

  blockquote: ({ children }) => (
    <MotionBlockquote
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="blockquote-card my-7"
    >
      {children}
    </MotionBlockquote>
  ),

  /* Bold học thuật: chỉ tăng weight, không đổi màu */
  strong: ({ children }) => (
    <strong className="font-bold">
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] hover:underline"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 mb-5">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 mb-5">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="mb-2 pl-1">
      {processChildren(children)}
    </li>
  ),

  hr: () => (
    <div className="flex items-center justify-center gap-4 my-10">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent-secondary)] to-transparent" />
      <span className="text-[var(--accent-secondary)] text-lg">❧</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--accent-secondary)] to-transparent" />
    </div>
  ),

  table: ({ children }) => (
    <div className="overflow-x-auto my-14 academic-table-wrapper select-none">
      <MotionTable
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="min-w-[900px] w-full border-collapse border-y-2 border-[var(--accent-primary)] dark:border-[var(--accent-secondary)] my-4 text-[0.98rem] font-body"
      >
        {children}
      </MotionTable>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-[var(--accent-primary)] text-white dark:bg-[var(--accent-secondary)] dark:text-[var(--background)] font-serif uppercase tracking-widest text-[0.75rem]">
      {children}
    </thead>
  ),

  th: ({ children }) => (
    <th className="px-10 py-8 text-left font-bold border border-white/20 dark:border-black/20 align-middle">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-10 py-12 border border-[var(--card-border)] leading-[1.95] text-[var(--foreground)] align-top first:font-bold first:bg-[var(--accent-primary)]/5 dark:first:bg-[var(--accent-secondary)]/5 first:text-[var(--accent-primary)] dark:first:text-[var(--accent-secondary)] first:w-[28%] md:first:w-[24%] border-l-0 last:border-r-0">
      {processChildren(children)}
    </td>
  ),

  tr: ({ children }) => (
    <tr className="hover:bg-[var(--accent-secondary)]/5 transition-colors duration-300">
      {children}
    </tr>
  ),
};

/** Bỏ phần trùng với trang bìa: tiêu đề + phụ đề + ---, bắt đầu từ "## Lời Mở Đầu". */
function stripTitlePage(content: string): string {
  const marker = "## Lời Mở Đầu";
  const idx = content.indexOf(marker);
  if (idx !== -1) return content.slice(idx);
  return content;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = stripTitlePage(content)
    .replace(/^## Nguồn Trích Dẫn[\s\S]*$/m, "")
    .replace(/\[\^\d+\]:\s*.+$/gm, "");

  return (
    <div className="prose-catholic max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={customComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
