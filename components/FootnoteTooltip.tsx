"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Footnote {
  id: string;
  number: number;
  content: string;
  url?: string;
}

interface FootnoteTooltipProps {
  number: number;
  footnote: Footnote;
}

export default function FootnoteTooltip({ number, footnote }: FootnoteTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      if (spaceAbove < 200 && spaceBelow > spaceAbove) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span className="relative inline-block">
      <button
        ref={triggerRef}
        onClick={handleToggle}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="footnote-ref cursor-pointer hover:text-[var(--accent-secondary)] transition-colors"
        aria-label={`Footnote ${number}`}
      >
        [{number}]
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: position === "top" ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === "top" ? 10 : -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute z-50 w-72 sm:w-80 p-4
              bg-[var(--card-bg)] border border-[var(--card-border)]
              rounded-lg shadow-xl
              text-sm text-[var(--foreground)]
              ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
              left-1/2 -translate-x-1/2
            `}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Arrow */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2 w-3 h-3
                bg-[var(--card-bg)] border-[var(--card-border)]
                transform rotate-45
                ${position === "top" 
                  ? "bottom-0 translate-y-1/2 border-r border-b" 
                  : "top-0 -translate-y-1/2 border-l border-t"
                }
              `}
            />

            {/* Content */}
            <div className="relative">
              <div className="flex items-start gap-2 mb-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] text-xs font-semibold flex items-center justify-center">
                  {number}
                </span>
                <span className="font-medium text-[var(--accent-primary)] dark:text-[var(--accent-secondary)]">
                  Chú thích
                </span>
              </div>
              
              <p className="text-[var(--muted)] leading-relaxed mb-2" style={{ fontFamily: "var(--font-be-vietnam), system-ui, sans-serif" }}>
                {footnote.content}
              </p>

              {footnote.url && (
                <a
                  href={footnote.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] hover:underline"
                >
                  <span>Xem nguồn</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

interface FootnoteProviderProps {
  children: ReactNode;
  footnotes: Footnote[];
}

export function FootnoteProvider({ children, footnotes }: FootnoteProviderProps) {
  return <>{children}</>;
}
