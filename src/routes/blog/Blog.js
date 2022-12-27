import index from "src/blog/index.json";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MarkdownParser from "../../markdown/MarkdownParser";
import hljs from "highlight.js";

function Blog() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, updateData] = useState("");

  useEffect(() => {
    hljs.highlightAll();
    const path = location.pathname.slice(1);
    if (index.filter((e) => e.location === path).length !== 1) {
      navigate("/error");
    } else {
      const parser = new MarkdownParser();
      parser.getHtmlFromMarkdown(path).then((res) => {
        updateData(res);
      });
    }
  }, []);

  useEffect(() => {
    const hash = location.hash;
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  });

  return (
    <div data-testid="blog" className="Blog">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default Blog;
