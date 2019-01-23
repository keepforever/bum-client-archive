import React from 'react';
import { Mutation } from 'react-apollo';
import LOGIN_MUTATION from '../graphql/mutation/LOGIN_MUTATION'

export default () => {
  return (
    <Mutation mutation={LOGIN_MUTATION}>
      {(login, res) => {
        console.log('\n', 'res.data:', '\n', res.data )
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
