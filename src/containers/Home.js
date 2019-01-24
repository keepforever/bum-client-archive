import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import ME_QUERY from "../graphql/query/ME_QUERY";
import Deck from "../components/DeckTwo"

class Home extends Component {


  render() {
    console.log("\n", `Home this.props`, "\n", "\n", this.props);

    if(this.props.meQuery.loading) {
      return <h1>LOADING ...</h1>
    }

    if(this.props.meQuery.me === null) {
      console.log('\n', 'oopsie', '\n', '\n' )
      return <h1>NULL</h1>
    }

    const {
      meQuery: {
        me: {
          nickName
        },
        myDecks,
      }
    } = this.props;

    return (
      <div>
        <h1>Hello Home</h1>
        <h2>nickName: {nickName}</h2>
        {myDecks.length > 0 && (
          myDecks.map((d) => {
            return (
              <Deck key={d.name} {...d} />
            )
          })
        )}
      </div>
    )
  }
}

export default compose(
  graphql(ME_QUERY, {
    name: "meQuery"
  }),
)(Home);
