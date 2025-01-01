import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import GetStarted from "./components/getStarted/getStarted";


// Import other pages/components for routes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />

      </Routes>
    </Router>
  );
};

export default App;
