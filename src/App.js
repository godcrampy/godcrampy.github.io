import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Essay from "./routes/essay/Essay";
import ErrorPage from "./error-page";
import EssayList from "./routes/essay-list/EssayList";
import Work from "./routes/work/Work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essay" element={<EssayList />} />
      <Route path="/essay/:essayId" element={<Essay />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
