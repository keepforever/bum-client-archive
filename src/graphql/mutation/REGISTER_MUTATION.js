import gql from "graphql-tag";
import USER_FRAGMENT from "../fragments/USER_FRAGMENT";

// TODO: need to remove hard coded vars to implement variable input.

export default gql`
  mutation($nickName: String!, $email: String!, $password: String!) {
    register( data: {
      nickName: $nickName, email: $email, password: $password
    }) {
      ...UserInfo
    }
  }
  ${USER_FRAGMENT}
`;
