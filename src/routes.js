import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
// gql
import { graphql, compose } from 'react-apollo';
import ME_QUERY from './graphql/query/ME_QUERY';
// Pages
import Home from "./containers/Home";
import Register from "./containers/Register";
import ConfirmEmail from "./containers/ConfirmEmail";
import About from "./components/scratch/About";
import Login from "./components/Login";
import Add from "./containers/AddDeck";
import AllDecks from "./containers/AllDecks";


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
    protected: true
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
    protected: true
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
    protected: true
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />,
    protected: true
  },
  {
    path: "/add",
    exact: true,
    main: () => <Add />,
    protected: false
  },
  {
    path: "/all",
    exact: true,
    main: () => <AllDecks />,
    protected: false
  }
];

const Routes = props => {

  if(props.meQuery.loading) {
    return <h1>LOADING ...</h1>
  }

  const shouldShowLanding = !!props.meQuery.me

  if(!shouldShowLanding) {
    return <Redirect to="/register" />
  }

  console.log('\n', 'shouldShowLanding', '\n', '\n', shouldShowLanding )


  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.protected) {
          return (
            <Route
              exact
              key={index}
              path={route.path}
              render={() =>
                props.shouldShowLanding ? <Redirect to="/register" /> : <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              }
            />
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        }
      })}
      <Route
        path="/user/confirm/:token"
        render={props => <ConfirmEmail {...props} />}
      />
    </Switch>
  );
};

export default withRouter(compose(
  graphql(ME_QUERY, {
    options: { fetchPolicy: "cache-and-network" },
    name: "meQuery"
  }),
)(Routes));
