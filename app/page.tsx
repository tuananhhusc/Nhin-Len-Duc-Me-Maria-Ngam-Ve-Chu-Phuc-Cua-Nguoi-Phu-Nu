import fs from "fs";
import path from "path";
import HomeContentWrapper from "@/components/HomeContentWrapper";

export default function Home() {
  const filePath = path.join(process.cwd(), "content", "report.md");
  const content = fs.readFileSync(filePath, "utf8");

  return <HomeContentWrapper content={content} />;
}
