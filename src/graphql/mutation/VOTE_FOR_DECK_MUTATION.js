import gql from "graphql-tag";

// TODO: need to remove hard coded vars to implement variable input.

export default gql`
  mutation($quality: Boolean!, $deckId: Float!) {
    voteForDeck( quality: $quality, deckId: $deckId)
  }
`;
