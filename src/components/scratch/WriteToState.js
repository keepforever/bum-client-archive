import React from 'react';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';

export default () => {
  return (
    <ApolloConsumer>
      {client => {
        console.log("hello write to state");
        
        return (
          <div style={{ margin: '20px', height: '25vh' }}>
            <form
              onSubmit={e => {
                e.preventDefault();
                client.writeData({
                  data: { foo: 'bar', boo: 'baz'}
                });
              }}
            >
              <button
                style={{
                  height: '150px',
                  width: '210px',
                  color: 'yellow',
                  fontSize: '30px',
                  backgroundColor: 'black',
                }}
                type="submit"
              >
                Write To State
              </button>
            </form>
          </div>
        );
      }}
    </ApolloConsumer>
  );
};
