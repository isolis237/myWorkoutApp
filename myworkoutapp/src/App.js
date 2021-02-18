import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound";
import MyGoals from "./components/pages/Goals/MyGoals";

export default class App extends React.Component {
  
render() {
  return (
    <BrowserRouter>
      <Route render={(props)=>(
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/myGoals" component={MyGoals}/>
              <Route component={NotFound}/>
            </Switch>
      )}/>
  </BrowserRouter>
  )
  }

}