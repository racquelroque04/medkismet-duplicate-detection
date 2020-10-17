import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_DATABASE_URL
});

const cache = new InMemoryCache()

export default new ApolloClient({
  link: httpLink,
  cache,
});