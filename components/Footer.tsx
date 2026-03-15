"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[var(--background)] border-t border-[var(--card-border)] mt-24 py-16"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Subtle Decorative Icon */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent-secondary)]/30" />
          <span className="text-[var(--accent-secondary)] text-xl opacity-60">✝</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent-secondary)]/30" />
        </div>

        {/* Condensed Prayer - Precisely Centered */}
        <div className="flex justify-center w-full">
          <p className="font-serif text-lg sm:text-xl text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] italic mb-10 opacity-80 max-w-2xl leading-relaxed text-center">
            &ldquo;Lạy Mẹ Maria, xin cầu cho chúng con, những người tội lỗi, bây giờ và trong giờ lâm tử. Amen.&rdquo;
          </p>
        </div>

        {/* Minimal Info */}
        <div className="flex flex-col items-center gap-4 text-[var(--muted)]">
          <p className="text-xs tracking-[0.2em] uppercase font-sans">
            © {currentYear} Báo Cáo Chuyên Sâu
          </p>
          <p className="text-[0.65rem] italic tracking-widest uppercase opacity-60">
            Ad Maiorem Dei Gloriam Cho Vinh Danh Chúa Hơn
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
