import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import "./style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/Loading" exact component={LoadingScreen} />
      </Switch>
    </Router>
  );
}

export default App;
