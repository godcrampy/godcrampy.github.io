import { useParams } from "react-router-dom";
import index from "src/blog/index.json";
import { marked } from "marked";
import { useEffect, useState } from "react";
import Prism from "prismjs";

const getMarkdown = async (markdownFilePath) => {
  return await require(`../../${markdownFilePath}`);
};

function Blog() {
  useEffect(() => {
    Prism.highlightAll();
  });
  const params = useParams();
  const blogId = params.blogId;
  const [data, updateData] = useState("");

  Promise.all(
    index.map(async (e) => {
      const location = e.location;
      const mod = await getMarkdown(location);
      const file = await fetch(mod);
      const text = await file.text();
      const lexer = new marked.Lexer();
      const tokens = lexer.lex(text);
      console.log(
        tokens.map((e) => {
          return {
            ...e,
            html: marked.parse(e.raw, { langPrefix: "language-" }),
          };
        })
      );
      return marked.parse(text, { langPrefix: "language-" });
    })
  ).then((res) => updateData(res[0]));

  return (
    <div>
      Welcome to Blog {blogId}!
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default Blog;
