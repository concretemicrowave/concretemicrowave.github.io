import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sermons from "./pages/Sermons/Sermons";
import Tabs from "./components/Tabs/Tabs";
import ChurchAbout from "./pages/About/ChurchAbout/ChurchAbout";

function App() {
  return (
    <>
      <Router>
        <Tabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/church" element={<ChurchAbout />} />
          <Route path="/sermons" element={<Sermons />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
