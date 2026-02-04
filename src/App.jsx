import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<AllProjects />} />

        <Route
          path="*"
          element={<div className="text-white">404 - No encontrado</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
