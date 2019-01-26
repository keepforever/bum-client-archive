import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import ALL_DECKS_QUERY from "../graphql/query/ALL_DECKS_QUERY";
import Deck from "../components/Deck"

class AllDecks extends Component {


  render() {
    console.log("\n", `Home this.props`, "\n", "\n", this.props);

    if(this.props.allDecksQuery.loading) {
      return <h1>LOADING ...</h1>
    }


      const {allDecksQuery: {
        allDecks
      }
    } = this.props;

    return (
      <div style={{paddingLeft: '20px'}}>
        <h1>ALL DECKS</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}>
        {allDecks.length > 0 && (
          allDecks.map((d) => {
            return (
              <Deck key={d.name} {...d} />
            )
          })
        )}
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(ALL_DECKS_QUERY, {
    name: "allDecksQuery",
    options: {
      pollInterval: 10000
    }
  }),
)(AllDecks);
