"use client";

import { motion } from "framer-motion";
import { getAllAPAReferences } from "@/lib/parseFootnotes";

export default function ReferencesSection() {
  const references = getAllAPAReferences();

  return (
    <motion.section
      id="tai-lieu-tham-khao"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 pt-10 border-t-2 border-[var(--accent-secondary)]/30"
    >
      <h2 className="font-serif text-2xl sm:text-[1.9rem] font-semibold leading-tight text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] mb-2">
        Tài liệu tham khảo
      </h2>
      <p className="text-sm text-[var(--muted)] mb-6">
        Định dạng theo APA 7 (American Psychological Association, ấn bản thứ 7). Nguồn trực tuyến: Tác giả/Cơ quan. (Năm). Tiêu đề. Tên website. URL. <em>n.d.</em> = không đề ngày.
      </p>

      <ul className="space-y-6 list-none pl-0">
        {references.map((ref) => (
          <li
            key={ref.number}
            className="flex gap-4 text-[var(--foreground)] text-[0.9375rem] leading-[1.75]"
            style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
          >
            <span className="flex-shrink-0 font-bold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] min-w-[2.5rem]">
              [{ref.number}]
            </span>
            <div className="flex-1">
              <span className="font-medium">{ref.authors}.</span> ({ref.year}).{" "}
              <em className="text-[var(--foreground)] font-semibold">{ref.title}</em>.{" "}
              <span className="text-[var(--muted)]">{ref.siteName}.</span>{" "}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] hover:underline break-all opacity-80"
              >
                {ref.url}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
