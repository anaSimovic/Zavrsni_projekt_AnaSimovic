import "./styles.css";
import Main from "./Components/Main";
import PrijavaForm from "./Components/Prijava.js";
import AboutUs from "./Components/Vodici.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Prijava" element={<PrijavaForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
