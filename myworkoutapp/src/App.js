import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css"

import Layout from "./components/Layout";
import MyWorkouts from "./components/pages/MyWorkouts";
import PublicWorkouts from "./components/pages/PublicWorkouts";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import MyGoals from "./components/pages/MyGoals";

function App() {
  return (
      <BrowserRouter>
        <Route render={(props)=>(
            <Layout {...props}>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Home" exact component={Home}/>
                <Route path="/MyWorkouts" component={MyWorkouts}/>
                <Route path="/PublicWorkouts" component={PublicWorkouts}/>
                <Route path="/myGoals" component={MyGoals}/>
                <Route component={NotFound}/>
              </Switch>
            </Layout>
        )}/>
      </BrowserRouter>
  )
}

export default App;