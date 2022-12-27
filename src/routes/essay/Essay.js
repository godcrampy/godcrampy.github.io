import index from "src/essay/index.json";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MarkdownParser from "../../markdown/MarkdownParser";
import hljs from "highlight.js";

function Essay() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, updateData] = useState("");
  const [config, updateConfig] = useState({});

  useEffect(() => {
    hljs.highlightAll();
    const path = location.pathname.slice(1);
    const config = index.find((e) => e.location === path);
    if (config === undefined) {
      navigate("/error");
    } else {
      const parser = new MarkdownParser();
      parser.getHtmlFromMarkdown(path).then((res) => {
        updateData(res);
      });
      updateConfig(config);
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
    <div data-testid="essay" className="Essay">
      <h1>{config.title}</h1>
      <p className="author">
        {config.author} <br /> {config.date}
      </p>
      <div className="abstract">
        <h2>Abstract</h2>
        <p>{config.abstract}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default Essay;
