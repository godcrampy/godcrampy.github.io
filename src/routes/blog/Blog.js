import { useParams } from "react-router-dom";

function Blog() {
  const params = useParams();
  const blogId = params.blogId;

  console.log(params);
  return <div>Welcome to Blog {blogId}!</div>;
}

export default Blog;
