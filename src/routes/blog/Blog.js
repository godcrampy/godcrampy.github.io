import index from "src/blog/index.json";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import MarkdownParser from "../../markdown/MarkdownParser";
import { useLocation, useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, updateData] = useState("");

  useEffect(() => {
    Prism.highlightAll();
    const path = location.pathname.slice(1);
    if (index.filter((e) => e.location === path).length !== 1) {
      navigate("/error");
    } else {
      const parser = new MarkdownParser({ langPrefix: "language-", gfm: true });
      parser.getHtmlFromMarkdown(path).then((res) => {
        updateData(res);
      });
    }
  }, []);

  return (
    <div data-testid="blog" className="Blog">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default Blog;
