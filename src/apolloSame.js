import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  credentials: 'same-origin',
  uri: process.env.REACT_APP_SERVER_URL,
  cache: new InMemoryCache(),
})
