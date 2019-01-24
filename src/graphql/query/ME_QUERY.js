import gql from 'graphql-tag';
import USER_FRAGMENT from '../fragments/USER_FRAGMENT';
import DECK_FRAGMENT from '../fragments/DECK_FRAGMENT';

export default gql`
  query {
    me {
      ...UserInfo
    }
    myDecks {
      ...DeckInfo
    }
  }
  ${USER_FRAGMENT}
  ${DECK_FRAGMENT}
`;
