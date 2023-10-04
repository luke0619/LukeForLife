import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "./home/pages/Home";
import Resume from "./resume/pages/Resume";

import Navigation from "./shared/components/UIElements/Navigation";

import "./css/style.css";
import Footer from "./shared/components/UIElements/Footer";

function App() {
  return (
    <Router>
      <main>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Redirect to="/" />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
