import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import ME_QUERY from "../graphql/query/ME_QUERY";

class Home extends Component {


  render() {
    console.log("\n", `Home this.props`, "\n", "\n", this.props);

    if(this.props.meQuery.loading) {
      return <h1>LOADING ...</h1>
    }

    const {
      meQuery: {
        me: {
          nickName
        }
      }
    } = this.props;


    return (
      <div>
        <h1>Hello Home</h1>
        <h2>nickName: {nickName}</h2>
      </div>
    )
  }
}

export default compose(
  graphql(ME_QUERY, {
    name: "meQuery"
  }),
)(Home);
