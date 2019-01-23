import gql from 'graphql-tag';
import USER_FRAGMENT from '../fragments/USER_FRAGMENT'

// TODO: need to remove hard coded vars to implement variable input.

export default gql`
  mutation {
    login(password: "b", email: "b@b.com") {
      ...UserInfo
    }
  }
  ${USER_FRAGMENT}
`;
