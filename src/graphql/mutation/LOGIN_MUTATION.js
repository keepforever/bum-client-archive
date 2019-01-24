import gql from 'graphql-tag';
import USER_FRAGMENT from '../fragments/USER_FRAGMENT'

// TODO: need to remove hard coded vars to implement variable input.

export default gql`
  mutation ($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      ...UserInfo
    }
  }
  ${USER_FRAGMENT}
`;
