import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_FOO = gql`
  {
    foo @client
    boo @client
  }
`;

export default () => (
  <Query query={GET_FOO}>
    {({ data, client }) => {
      const store = client.store.getCache()
      console.log('STORE', store);
      console.log('DATA', data);
      return (
        <div>
          <h1>READ FROM STATE</h1>
          <h2>foo: {data.foo}</h2>
          <h2>boo: {data.boo}</h2>
        </div>
      );
    }}
  </Query>
);
