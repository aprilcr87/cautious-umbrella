import { Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Asteroids from "./pages/Asteroids";
import MarsRover from "./pages/Home";

function App() {
  return (
    <div clas="container">
      <Navigation />
      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/apod" component={Apod} />
          <Route exact={true} path="/asteroids" component={Asteroids} />
          <Route exact={true} path="/mars" component={MarsRover} />
        </Switch>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
