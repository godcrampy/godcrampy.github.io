import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Essay from "./routes/essay/Essay";
import ErrorPage from "./error-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essay/:essayId" element={<Essay />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
