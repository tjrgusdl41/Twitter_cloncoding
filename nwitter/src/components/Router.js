import React, { useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/"></Redirect>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/"></Redirect>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
