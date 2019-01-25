import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import ConfirmEmail from "./containers/ConfirmEmail";
import About from "./components/scratch/About";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Add from "./containers/AddDeck";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={Add} />
            <Route
              path="/user/confirm/:token"
              render={props => <ConfirmEmail {...props} />}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
