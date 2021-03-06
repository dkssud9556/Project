import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Axios from "axios";
import SignIn from "./SignIn";
import MainComponent from "./MainComponent";
import Redirection from "./Redirection";

class Main extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirection />} />
            <Route exact path="/signin" render={() => <SignIn />} />
            <Route path="/:service" render={() => <MainComponent />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
