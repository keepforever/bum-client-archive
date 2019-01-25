import gql from "graphql-tag";
import DECK_FRAGMENT from "../fragments/DECK_FRAGMENT";

export default gql`
  mutation($name: String!, $description: String!, $deckList: String!) {
    createDeck(name: $name, description: $description, deckList: $deckList
    ) {
      ...DeckInfo
    }
  }
  ${DECK_FRAGMENT}
`;
