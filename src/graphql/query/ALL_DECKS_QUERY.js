import gql from 'graphql-tag';
import DECK_FRAGMENT from '../fragments/DECK_FRAGMENT';

export default gql`
  query {
    allDecks {
      ...DeckInfo
    }
  }
  ${DECK_FRAGMENT}
`;
