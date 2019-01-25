import gql from 'graphql-tag';

export default gql`
  fragment DeckInfo on Deck {
    id
    name
    voteScore
    deckList
    description
    votes{
      quality
    }
  }
`;
