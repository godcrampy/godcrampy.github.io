import index from "../essay/index.json";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

class MarkdownParser {
  async #getMarkdownContent(markdownFilePath) {
    const essayConfig = index.find((e) => e.location === markdownFilePath);

    if (essayConfig === undefined) {
      throw "Error: cannot find essay config";
    }

    const filePath = await require(`../${essayConfig.location}/index.md`);
    const file = await fetch(filePath);
    return await file.text();
  }

  async getHtmlFromMarkdown(pathname) {
    const text = await this.#getMarkdownContent(pathname);
    const parser = new MarkdownIt({ typographer: true, linkify: true });
    parser.use(require("markdown-it-highlightjs"), {
      hljs,
      auto: false,
      inline: true,
    });
    parser.use(require("markdown-it-anchor").default);
    parser.use(require("markdown-it-table-of-contents"), {
      listType: "ol",
      includeLevel: [1, 2, 3],
    });
    parser.use(require("markdown-it-footnote"));
    parser.use(require("markdown-it-sub"));
    parser.use(require("markdown-it-sup"));
    return parser.render(text);
  }
}

export default MarkdownParser;
