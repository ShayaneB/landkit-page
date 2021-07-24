import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./components/mainPage";
import LandingPage from "./components/landingPage";
import Pages from "./components/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/pages" component={Pages} />
      </Switch>
    </Router>
  );
}

export default App;
