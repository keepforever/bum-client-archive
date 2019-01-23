import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGIN_MUTATION = gql`
  mutation {
    login(password: "a", email: "a@a.com") {
      id
      email
    }
  }
`;

export default () => {
  return (
    <Mutation mutation={LOGIN_MUTATION}>
      {(login, arg) => {
        console.log(arg);
        return (
          <div style={{ margin: '20px' }}>
            <form
              onSubmit={e => {
                e.preventDefault();
                login();
              }}
            >
              <button
                style={{
                  height: '50px',
                  width: '110px',
                  color: 'black',
                  backgroundColor: 'cornsilk',
                }}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        );
      }}
    </Mutation>
  );
};
