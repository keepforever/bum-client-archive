import React, { Component } from "react";
import Layout from "./components/Layout";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from './components/AuthRoute';

// Routes
import Home from "./containers/Home";
import Register from "./containers/Register";
import ConfirmEmail from "./containers/ConfirmEmail";
import About from "./components/scratch/About";
import Login from "./components/Login";
import Add from "./containers/AddDeck";
import AllDecks from "./containers/AllDecks";

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/about" component={About} />
            <AuthRoute path="/add" component={Add} />
            {/* <Route path="/all" component={AllDecks} /> */}
            <AuthRoute path="/all" component={AllDecks} />

            <Route
              path="/user/confirm/:token"
              render={props => <ConfirmEmail {...props} />}
            />
          </Switch>
        </Layout>
    );
  }
}

export default App;
