import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import PublicRoute from "./Routers/PublicRoute";
import PrivateRoute from "./Routers/PrivateRoute";
import Login from "./components/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/shards-dashboard.1.1.0.min.css";

export default () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker((props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}

        <PublicRoute restricted={false} exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
