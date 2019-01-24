import gql from "graphql-tag";
// TODO: need to remove hard coded vars to implement variable input.

export default gql`
  mutation($token: String!) {
    confirmUser(token: $token)
  }
`;
