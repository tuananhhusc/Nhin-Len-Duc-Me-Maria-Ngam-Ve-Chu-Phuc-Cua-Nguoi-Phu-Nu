"use client";

import dynamic from "next/dynamic";

const HomeContentInner = dynamic(() => import("@/components/HomeContent"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--accent-secondary)] border-t-transparent mx-auto mb-4" />
        <p className="text-[var(--muted)]">Đang tải...</p>
      </div>
    </div>
  ),
});

export default function HomeContentWrapper({ content }: { content: string }) {
  return <HomeContentInner content={content} />;
}
