"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GlossaryItem {
  term: string;
  definition: string;
}

const GLOSSARY_DATA: Record<string, string> = {
  "Kecharitomene": "Thuật ngữ Hy Lạp trong Lc 1,28, có nghĩa là 'Đầy ơn phúc' hoặc 'Người đã được làm cho đầy ân sủng' một cách hoàn hảo và vĩnh viễn.",
  "Gratia Gratis Data": "Ân sủng ban cho nhưng không, không dựa trên công trạng của người nhận mà hoàn toàn do lòng nhân hậu của Thiên Chúa.",
  "Beatitude": "Mối phúc hay hạnh phúc đích thực, thường được hiểu qua Tám Mối Phúc của Chúa Giêsu trong Bài giảng trên núi.",
  "Fiat": "Tiếng 'Xin vâng' của Đức Maria trước lời truyền tin của Thiên sứ, thể hiện sự vâng phục tuyệt đối vào ý định của Thiên Chúa.",
  "Mater Dolorosa": "Mẹ Sầu Bi - hình tượng Đức Maria đứng dưới chân thập giá, hiệp thông với nỗi đau khổ của Chúa Giêsu.",
  "Magnificat": "Bài ca ngợi khen của Đức Maria (Lc 1,46-55), tuyên xưng những kỳ công Thiên Chúa thực hiện cho người khiêm hạ.",
};

export default function GlossaryTooltip({ term, children }: { term: string; children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const definition = GLOSSARY_DATA[term];

  if (!definition) return <>{children}</>;

  return (
    <span 
      className="relative inline-block border-b border-dotted border-[var(--accent-secondary)] cursor-help group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="text-[var(--accent-primary)] dark:text-[var(--accent-secondary)] font-medium">
        {children}
      </span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[var(--card-bg)] border border-[var(--accent-secondary)]/30 shadow-xl rounded-lg z-[100] text-xs leading-relaxed text-[var(--foreground)] normal-case text-center backdrop-blur-md"
          >
            <strong className="block mb-1 text-[var(--accent-secondary)] uppercase tracking-wider">{term}</strong>
            {definition}
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[var(--card-bg)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
