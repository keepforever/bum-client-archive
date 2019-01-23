import gql from 'graphql-tag';
import USER_FRAGMENT from '../fragments/USER_FRAGMENT';

export default gql`
  query {
    me {
      ...UserInfo
    }
  }
  ${USER_FRAGMENT}
`;
