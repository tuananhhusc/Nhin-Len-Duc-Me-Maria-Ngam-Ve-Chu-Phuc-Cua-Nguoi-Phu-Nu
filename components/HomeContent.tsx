"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TableOfContents, { TOCItem } from "@/components/TableOfContents";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ReferencesSection from "@/components/ReferencesSection";
import DarkModeToggle from "@/components/DarkModeToggle";
import SectionNavigation from "@/components/SectionNavigation";
import { extractHeadings } from "@/lib/extractHeadings";

interface HomeContentProps {
  content: string;
}

export default function HomeContent({ content }: HomeContentProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    setTocItems(extractHeadings(content));
  }, [content]);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />

        {/* Layout: TOC trái + Nội dung chính */}
        <div className="flex">
          <TableOfContents items={tocItems} />

          <div className="flex-1 min-w-0">
            <article
              className="academic-prose content-area px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-10"
              id="loi-mo-dau"
              aria-label="Nội dung báo cáo"
            >
              <MarkdownRenderer content={content} />
              <ReferencesSection />
              
              {/* Dynamic Section Navigation (Example: for the whole report) */}
              <SectionNavigation 
                prevId="loi-mo-dau" 
                prevLabel="Lời mở đầu" 
                nextId="tai-lieu-tham-khao" 
                nextLabel="Tài liệu tham khảo"
              />
            </article>
          </div>
        </div>
      </main>

      <div className="flex">
        {/* Placeholder to match TOC width on desktop */}
        <div className="hidden lg:block lg:w-[18rem] xl:w-[20rem] flex-shrink-0" />
        <div className="flex-1">
          <Footer />
        </div>
      </div>

      {/* Dark mode toggle cố định góc phải */}
      <DarkModeToggle />
    </div>
  );
}
