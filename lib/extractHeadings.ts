import { TOCItem } from "@/components/TableOfContents";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function extractHeadings(markdown: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    
    if (text.startsWith("Nguồn Trích Dẫn") || text.includes("[^")) {
      continue;
    }

    const cleanText = text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

    const id = slugify(cleanText);

    headings.push({
      id,
      text: cleanText,
      level,
    });
  }

  return headings;
}

export function addIdsToHeadings(markdown: string): string {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  
  return markdown.replace(headingRegex, (match, hashes, text) => {
    const cleanText = text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .trim();
    
    const id = slugify(cleanText);
    return `${hashes} ${text} {#${id}}`;
  });
}
