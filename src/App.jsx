import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowAll from "./components/ShowAll";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="flex flex-col">
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/showall" element={<ShowAll />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
