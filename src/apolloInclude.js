import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  credentials: 'include',
  uri: process.env.REACT_APP_SERVER_URL,
  cache: new InMemoryCache(),
})
