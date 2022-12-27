import index from "../blog/index.json";
import { marked } from "marked";

class MarkdownParser {
  constructor(options) {
    this.options = options;
  }

  async #getMarkdown(markdownFilePath) {
    const blogConfig = index.find((e) => e.location === markdownFilePath);

    if (blogConfig === undefined) {
      throw "Error: cannot find blog config";
    }

    return await require(`../${blogConfig.location}/index.md`);
  }

  async getHtmlFromMarkdown(pathname) {
    const filePath = await this.#getMarkdown(pathname);
    const file = await fetch(filePath);
    const text = await file.text();
    return marked.parse(text, this.options);
  }
}

export default MarkdownParser;
