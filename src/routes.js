import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Tablet from "./components/tablet";

const Routes = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/questions" component={Tablet}></Route>
  </Router>
);

export default Routes;
