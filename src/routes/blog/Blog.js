import {useParams} from "react-router-dom";
import index from "src/blog/index.json"
import {marked} from "marked";
import {useState} from "react";

const getMarkdown = async (markdownFilePath) => {
  return await require(`../../${markdownFilePath}`)
}

function Blog() {
  const params = useParams();
  const blogId = params.blogId;
  const [data, updateData] = useState("");

  Promise.all(index.map(async e => {
    const location = e.location;
    const mod = await getMarkdown(location);
    const file = await fetch(mod);
    const text = await file.text();
    return marked.parse(text)
  })).then(res => updateData(res[0]));

  return (
      <div>
        Welcome to Blog {blogId}!
        <div dangerouslySetInnerHTML={{__html: data}}></div>
      </div>);
}

export default Blog;
