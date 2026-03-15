import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefdfb",
          100: "#fcfcea",
          200: "#f8f6d8",
          300: "#f0edc0",
        },
        "deep-blue": {
          DEFAULT: "#1e3a5f",
          50: "#f0f5fa",
          100: "#dce8f3",
          200: "#b9d1e7",
          300: "#89b3d6",
          400: "#5a8fc0",
          500: "#4a7db8",
          600: "#3a6699",
          700: "#1e3a5f",
          800: "#162c47",
          900: "#0f1e30",
        },
        gold: {
          DEFAULT: "#c9a758",
          50: "#faf8f0",
          100: "#f4efd9",
          200: "#e8ddb3",
          300: "#d9c785",
          400: "#c9a758",
          500: "#b8923d",
          600: "#9a7530",
          700: "#7a5a26",
          800: "#5a421c",
          900: "#3a2b12",
        },
        burgundy: {
          DEFAULT: "#a11111",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#c94444",
          600: "#a11111",
          700: "#8b0e0e",
          800: "#6b0b0b",
          900: "#450707",
        },
        night: {
          DEFAULT: "#1a1a2e",
          50: "#e8e8ec",
          100: "#c5c5cf",
          200: "#9e9eb0",
          300: "#777790",
          400: "#515170",
          500: "#2e2e4a",
          600: "#1a1a2e",
          700: "#151528",
          800: "#101020",
          900: "#0a0a14",
        },
      },
      fontFamily: {
        // Headings Cormorant Garamond: học thuật, cổ điển, rõ ràng dấu tiếng Việt
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        // Body Source Serif 4: tối ưu đọc dài, dấu tiếng Việt sắc nét
        body: ["var(--font-source-serif)", "Georgia", "serif"],
        // UI Be Vietnam Pro: thiết kế cho tiếng Việt, dùng cho TOC, nhãn, chú thích
        sans: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--tw-prose-body)",
            fontFamily: "var(--font-source-serif), Georgia, serif",
            h1: {
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            },
            h2: {
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: "600",
              letterSpacing: "-0.005em",
            },
            h3: {
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: "600",
            },
            h4: {
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: "500",
            },
            blockquote: {
              fontFamily: "var(--font-source-serif), Georgia, serif",
              fontStyle: "italic",
              borderLeftColor: "#c9a758",
            },
          },
        },
        catholic: {
          css: {
            "--tw-prose-body": "#2d2d2d",
            "--tw-prose-headings": "#1e3a5f",
            "--tw-prose-lead": "#4a4a4a",
            "--tw-prose-links": "#1e3a5f",
            "--tw-prose-bold": "#1e3a5f",
            "--tw-prose-counters": "#c9a758",
            "--tw-prose-bullets": "#c9a758",
            "--tw-prose-hr": "#e5e5e5",
            "--tw-prose-quotes": "#a11111",
            "--tw-prose-quote-borders": "#c9a758",
            "--tw-prose-captions": "#6b6b6b",
            "--tw-prose-code": "#1e3a5f",
            "--tw-prose-pre-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#1e3a5f",
            "--tw-prose-th-borders": "#d4d4d4",
            "--tw-prose-td-borders": "#e5e5e5",
          },
        },
        "catholic-dark": {
          css: {
            "--tw-prose-body": "#e8e8e8",
            "--tw-prose-headings": "#d4af37",
            "--tw-prose-lead": "#b8b8b8",
            "--tw-prose-links": "#4a7db8",
            "--tw-prose-bold": "#d4af37",
            "--tw-prose-counters": "#d4af37",
            "--tw-prose-bullets": "#d4af37",
            "--tw-prose-hr": "#3a3a3a",
            "--tw-prose-quotes": "#c94444",
            "--tw-prose-quote-borders": "#d4af37",
            "--tw-prose-captions": "#9a9a9a",
            "--tw-prose-code": "#4a7db8",
            "--tw-prose-pre-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#0f1e30",
            "--tw-prose-th-borders": "#3a3a3a",
            "--tw-prose-td-borders": "#2a2a2a",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
