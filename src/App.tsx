import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/?githubUser" element={<MainPage />} />
    </Routes>
  );
}

export default App;
