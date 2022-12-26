import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Blog from "./routes/blog/Blog";
import ErrorPage from "./error-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<Blog />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
