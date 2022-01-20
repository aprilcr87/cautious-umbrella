import { Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Asteroids from "./pages/Asteroids";
import MarsRover from "./pages/MarsRover";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/mars" element={<MarsRover />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
