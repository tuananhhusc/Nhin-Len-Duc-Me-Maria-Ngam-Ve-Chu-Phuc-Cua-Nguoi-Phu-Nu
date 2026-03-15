"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function Navbar({ onToggleDarkMode, isDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--card-bg)]/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="font-serif text-lg font-semibold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.02 }}
          >
            Báo Cáo Chuyên Sâu
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#loi-mo-dau"
              className="text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
            >
              Lời Mở Đầu
            </a>
            <a
              href="#muc-luc"
              className="text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
            >
              Mục Lục
            </a>
            <a
              href="#ket-luan"
              className="text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
            >
              Kết Luận
            </a>
            
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-secondary)] transition-all"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--accent-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--card-bg)] border-t border-[var(--card-border)]"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#loi-mo-dau"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lời Mở Đầu
              </a>
              <a
                href="#muc-luc"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mục Lục
              </a>
              <a
                href="#ket-luan"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent-secondary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kết Luận
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
