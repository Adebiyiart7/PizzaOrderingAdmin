import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";

// LOCAL IMPORTS
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
