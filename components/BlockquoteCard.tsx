"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlockquoteCardProps {
  children: ReactNode;
  source?: string;
}

export default function BlockquoteCard({ children, source }: BlockquoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="blockquote-card my-7"
    >
      {/* Nội dung trích dẫn italic, màu accent-quote */}
      <div
        className="text-[1rem] italic text-[var(--accent-quote)] leading-[1.9] pl-5 py-1"
        style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
      >
        {children}
      </div>

      {/* Nguồn trích dẫn */}
      {source && (
        <div
          className="mt-2 pl-5 text-[0.875rem] text-[var(--muted)] not-italic"
          style={{ fontFamily: "var(--font-be-vietnam), system-ui, sans-serif" }}
        >
          {source}
        </div>
      )}
    </motion.div>
  );
}
