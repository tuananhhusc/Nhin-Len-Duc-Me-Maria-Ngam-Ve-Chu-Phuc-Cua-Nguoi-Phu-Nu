import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

/**
 * Heading font: Cormorant Garamond
 * Serif cổ điển học thuật, mảnh và trang trọng, hỗ trợ tiếng Việt tốt.
 */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Body font: Source Serif 4
 * Serif học thuật dành cho văn bản dài, tối ưu dấu thanh tiếng Việt, hỗ trợ optical sizing.
 */
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * UI font: Be Vietnam Pro
 * Được thiết kế đặc biệt cho tiếng Việt; dùng cho TOC, nhãn, chú thích.
 */
const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhìn Lên Đức Mẹ Maria, Ngẫm Về Chữ Phúc Của Người Phụ Nữ",
  description: "Báo cáo về hình tượng Đức Mẹ Maria và ý nghĩa chữ Phúc đối với người phụ nữ.",
  keywords: ["Đức Mẹ Maria", "Thần học", "Công giáo", "Phụ nữ", "Phúc đức", "Kitô giáo"],
  authors: [{ name: "Khảo Luận Thần Học" }],
  openGraph: {
    title: "Nhìn Lên Đức Mẹ Maria, Ngẫm Về Chữ Phúc Của Người Phụ Nữ",
    description: "Nhìn Lên Đức Mẹ Maria, Ngẫm Về Chữ Phúc Của Người Phụ Nữ",
    type: "article",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} ${beVietnam.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
