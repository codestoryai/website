import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getChangeLogFile() {
  const filePath = join(process.cwd(), "changelog.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  return content;
}
