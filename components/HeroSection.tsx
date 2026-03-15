"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Trang bìa kiểu học thuật: tiêu đề, phụ đề, trích dẫn; không dùng "Đọc tiếp" hay trang trí blog. */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y, backgroundImage: "url('/Nhin-Len-Duc-Me-Maria-Ngam-Ve-Chu-Phuc-Cua-Nguoi-Phu-Nu/header-bg.png')" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/40 to-[var(--background)]" />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block p-4 rounded-full bg-[var(--background)]/50 backdrop-blur-md border border-[var(--accent-secondary)]/30 ring-8 ring-[var(--accent-secondary)]/5 shadow-2xl">
            <span className="text-4xl text-[var(--accent-secondary)]" aria-hidden>✝</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] leading-tight mb-6 drop-shadow-sm"
        >
          Nhìn Lên Đức Mẹ Maria,
          <br />
          <span className="text-[var(--foreground)] opacity-90">
            Ngẫm Về Chữ Phúc Của Người Phụ Nữ
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-[200px] h-px bg-gradient-to-r from-transparent via-[var(--accent-secondary)] to-transparent mx-auto mb-8"
        />


        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-8 py-6 px-4 font-body text-xl sm:text-2xl text-[var(--accent-quote)] italic"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          <span className="absolute -top-4 -left-2 text-6xl text-[var(--accent-secondary)] opacity-20 font-serif leading-none">&ldquo;</span>
          &ldquo;Từ nay muôn thế hệ sẽ gọi tôi diễm phúc&rdquo;
          <span className="absolute -bottom-10 -right-2 text-6xl text-[var(--accent-secondary)] opacity-20 font-serif leading-none">&rdquo;</span>
          <cite className="block text-sm text-[var(--muted)] not-italic mt-4 tracking-widest uppercase">
            Phúc âm Luca 1,48
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="text-[var(--muted)] text-[0.6rem] uppercase tracking-[0.4em] font-sans">Cuộn xuống để đọc</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-6 h-6 text-[var(--accent-secondary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
