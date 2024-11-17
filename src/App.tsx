import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Controller, Viewer, Preview } from "./index";

function App() {
  return (
    <Router>
      <div>Header!!!!!!!</div>
      <Routes>
        <Route path="/controller" element={<Controller />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/viewer/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
