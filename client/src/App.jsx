import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}

export default App;
