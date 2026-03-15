"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

/** Gán số thứ tự học thuật: 1, 1.1, 1.2, 2, 2.1... */
function assignSectionNumbers(items: TOCItem[]): { item: TOCItem; number: string }[] {
  const result: { item: TOCItem; number: string }[] = [];
  let section = 0;
  let subsection = 0;

  for (const item of items) {
    if (item.level === 2) {
      section += 1;
      subsection = 0;
      result.push({ item, number: String(section) });
    } else if (item.level === 3) {
      subsection += 1;
      result.push({ item, number: `${section}.${subsection}` });
    } else {
      result.push({ item, number: "" });
    }
  }
  return result;
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const numberedItems = assignSectionNumbers(items);
  const mainSections = numberedItems.filter((e) => e.item.level === 2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0% -40% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    const refSection = document.getElementById("tai-lieu-tham-khao");
    if (refSection) observer.observe(refSection);
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const getSubsections = (sectionNumber: string) =>
    numberedItems.filter(
      (e) => e.item.level === 3 && e.number.startsWith(sectionNumber + ".")
    );

  const tocContent = (
    <div className="px-6 pt-8 pb-12">
      {/* "Mục Lục" serif lớn, nổi bật như tiêu đề tài liệu */}
      <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-1 leading-tight">
        Mục Lục
      </h2>
      <div className="h-px bg-[var(--foreground)]/20 mb-6" />

      <nav aria-label="Mục lục" className="space-y-1">
        {mainSections.map(({ item, number }) => {
          const subsections = getSubsections(number);
          const isActive =
            activeId === item.id ||
            subsections.some((s) => s.item.id === activeId);

          return (
            <div key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`toc-main-btn w-full text-left py-2.5 transition-all duration-200 ${
                  isActive ? "toc-active" : "toc-inactive"
                }`}
              >
                {item.text}
              </button>

              {/* Subsections hiện khi section đang active */}
              {subsections.length > 0 && isActive && (
                <div className="pl-3 ml-1 border-l border-[var(--accent-secondary)]/50 mt-0.5 mb-1 space-y-0.5">
                  {subsections.map(({ item: sub }) => (
                    <button
                      key={sub.id}
                      onClick={() => handleClick(sub.id)}
                      className={`toc-sub-btn w-full text-left py-1.5 transition-all duration-200 ${
                        activeId === sub.id ? "toc-sub-active" : "toc-sub-inactive"
                      }`}
                    >
                      {sub.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Tài liệu tham khảo */}
      <div className="mt-6 pt-4 border-t border-[var(--foreground)]/15">
        <button
          onClick={() => handleClick("tai-lieu-tham-khao")}
          className={`toc-main-btn w-full text-left py-2 transition-colors italic ${
            activeId === "tai-lieu-tham-khao" ? "toc-active" : "toc-inactive"
          }`}
        >
          Tài liệu tham khảo
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--accent-primary)] text-white shadow-lg hover:bg-[var(--accent-secondary)] transition-colors"
        aria-label="Mở mục lục"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar desktop: rộng hơn, màu nền trang, viền accent */}
      <aside
        id="muc-luc"
        className={`
          hidden lg:flex lg:flex-col
          toc-sidebar
          flex-shrink-0
          h-screen sticky top-0
          overflow-y-auto
        `}
      >
        {tocContent}
      </aside>

      {/* Drawer Mobile */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }}
        className={`
          lg:hidden fixed left-0 top-0 z-50
          w-[min(22rem,90vw)] h-full
          toc-drawer
          shadow-xl overflow-y-auto
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)]">
          <span className="font-serif font-semibold text-[var(--accent-primary)] dark:text-[var(--accent-secondary)]">
            Mục lục
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-[var(--card-border)]"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-3">{tocContent}</div>
      </motion.aside>
    </>
  );
}
