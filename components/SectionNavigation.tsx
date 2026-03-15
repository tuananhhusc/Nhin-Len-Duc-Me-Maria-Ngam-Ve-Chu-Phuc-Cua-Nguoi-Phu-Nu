"use client";

import { motion } from "framer-motion";

interface SectionNavigationProps {
  prevId?: string;
  prevLabel?: string;
  nextId?: string;
  nextLabel?: string;
}

export default function SectionNavigation({ prevId, prevLabel, nextId, nextLabel }: SectionNavigationProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-12 mt-16 border-t border-[var(--card-border)] no-print">
      {prevId ? (
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => scrollTo(prevId)}
          className="flex flex-col items-start group"
        >
          <span className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Quay lại</span>
          <span className="font-serif text-lg text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] group-hover:underline">
            ← {prevLabel}
          </span>
        </motion.button>
      ) : (
        <div />
      )}

      {nextId ? (
        <motion.button
          whileHover={{ x: 5 }}
          onClick={() => scrollTo(nextId)}
          className="flex flex-col items-end group"
        >
          <span className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Tiếp theo</span>
          <span className="font-serif text-lg text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] group-hover:underline">
            {nextLabel} →
          </span>
        </motion.button>
      ) : (
        <div />
      )}
    </div>
  );
}
