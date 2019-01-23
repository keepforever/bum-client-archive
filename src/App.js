import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './components/scratch/About';
import Layout from './components/Layout';
import Login from './components/Login';
import Add from './components/Add'

class App extends Component {
  render() {
    return <div className="App">
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={Add} />
        </Switch>
      </Layout>
    </div>;
  }
}

export default App;
